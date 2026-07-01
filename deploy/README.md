# Robionix deployment (VPS, Docker)

The Next.js site runs as a container (`robionix_web`) beside the existing WordPress
stack in `/wp/robionix`. WordPress is kept intact so we can roll back instantly.

## Topology
`robionix_nginx` terminates TLS on :80/:443 and routes by domain:
- `robionix.com` -> currently `wordpress:80` (WordPress). Go-live switches this to `robionix_web:3000`.
- `magicqc.online` -> `magicqc_nginx:80` (unchanged, never touched).

`robionix_web` joins the external network `robionix_wordpress_network` so nginx
resolves it by name.

## First deploy
```bash
# on the server
git clone https://github.com/AbdullahRaoo/Robionix.git ~/robionix-web
cd ~/robionix-web/deploy
cp .env.example .env        # then edit .env with the real RESEND_API_KEY
docker compose -f robionix-web.compose.yml up -d --build
# smoke test (from a container on the same network):
docker exec robionix_nginx wget -qO- http://robionix_web:3000 | head
```

## Go live (repoint nginx)
Edit `robionix.conf` inside the nginx container (root-owned on host; container root
can write the bind-mounted file), change the `location /` proxy target from
`http://wordpress:80` to `http://robionix_web:3000`, then reload:
```bash
docker exec robionix_nginx sed -i 's#proxy_pass http://wordpress:80;#proxy_pass http://robionix_web:3000;#' /etc/nginx/conf.d/robionix.conf
docker exec robionix_nginx nginx -t && docker exec robionix_nginx nginx -s reload
```

## Roll back to WordPress
```bash
docker exec robionix_nginx sed -i 's#proxy_pass http://robionix_web:3000;#proxy_pass http://wordpress:80;#' /etc/nginx/conf.d/robionix.conf
docker exec robionix_nginx nginx -t && docker exec robionix_nginx nginx -s reload
```

## Update the site later
```bash
cd ~/robionix-web && git pull
cd deploy && docker compose -f robionix-web.compose.yml up -d --build
```
