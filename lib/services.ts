export type Service = {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  intro: string;
  heroImg?: string;
  capabilities: { t: string; b: string }[];
  useCases: string[];
  approach: { t: string; b: string }[];
  related: { title: string; href: string; img: string; tag: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "computer-vision",
    name: "Computer Vision",
    tag: "Vision AI",
    tagline: "Visual intelligence, applied to the physical world",
    intro:
      "We build computer-vision systems that measure, detect, read and sort in real time. Whether it is quality control, surveillance or analytics, our models are trained for your specific task and deployed where the work actually happens.",
    heroImg: "/assets/work/bib-recognition.webp",
    capabilities: [
      { t: "Measurement", b: "Read dimensions and points-of-measure to the millimetre, as MagicQC does for garments." },
      { t: "Detection & OCR", b: "Find and read objects, codes and text in noisy, real-world scenes." },
      { t: "Classification", b: "Sort and grade products automatically by appearance or defect." },
      { t: "Tracking & analytics", b: "Count, track and analyse movement for operations insight." },
    ],
    useCases: ["Automated garment QC", "Marathon bib recognition", "Surveillance & safety", "Defect and grade sorting", "Throughput analytics"],
    approach: [
      { t: "Frame the task", b: "We define the exact decision the vision system must make, and the accuracy it needs." },
      { t: "Train for your data", b: "Models are trained and tuned on your products and conditions, not a generic dataset." },
      { t: "Deploy on the floor", b: "We ship it where it runs: a station, a camera, an app, with the speed the line demands." },
    ],
    related: [
      { title: "MagicQC", href: "/magicqc", img: "/assets/magicqc/operator-panel.webp", tag: "Garment measurement" },
      { title: "Bib Recognition", href: "/products/bib-recognition", img: "/assets/work/bib-recognition.webp", tag: "YOLO + OCR" },
    ],
  },
  {
    slug: "erp-development",
    name: "ERP Development",
    tag: "ERPNext",
    tagline: "Everything you need to manage, in one system",
    intro:
      "We design and implement tailored ERPNext solutions that align with your business processes. Cloud-based, customisable and intelligence-intensive, our ERP work helps you manage resources, meet client expectations and maximise profitability.",
    heroImg: "/assets/video/rmes-poster.webp",
    capabilities: [
      { t: "Unified operations", b: "Centralise accounting, HR, sales, purchase, inventory, CRM and projects." },
      { t: "Workflow optimisation", b: "Adjust ERPNext processes to match your business model exactly." },
      { t: "Integrations", b: "Connect ERPNext with the third-party tools and machines you already run." },
      { t: "Reports & dashboards", b: "Real-time, role-specific dashboards for informed decisions." },
    ],
    useCases: ["Manufacturing execution (RMES/KMES)", "Inventory & stores control", "Finance & HR automation", "CRM & sales", "Custom reporting"],
    approach: [
      { t: "Map the process", b: "We learn how your business actually runs before configuring anything." },
      { t: "Customise ERPNext", b: "Workflows, features and UI tailored to your operations." },
      { t: "Roll out & support", b: "Deployed, with local support and training so the team adopts it." },
    ],
    related: [
      { title: "RMES", href: "/products/rmes", img: "/assets/video/rmes-poster.webp", tag: "Manufacturing ERP" },
      { title: "KMES", href: "/products/kmes", img: "/assets/work/kmes.webp", tag: "Knitting ERP" },
    ],
  },
  {
    slug: "robotics-automation",
    name: "Robotics & Automation",
    tag: "Robotics",
    tagline: "Precision and productivity, by design",
    intro:
      "We design custom robotic solutions that bring accuracy, reliability and efficiency to your operations. From vision-guided cells to full line automation, our systems are built for your specific operational challenges.",
    heroImg: "/assets/services/robotics.webp",
    capabilities: [
      { t: "Robotic cells", b: "Custom cells for pick-and-place, assembly and material handling." },
      { t: "Vision-guided robotics", b: "Robots that see, pairing our computer vision with motion." },
      { t: "Line automation", b: "Automate sequences of operations across a production line." },
      { t: "Reliability engineering", b: "Built for accuracy and uptime in a real plant environment." },
    ],
    useCases: ["Pick-and-place", "Assembly automation", "Material handling", "Vision-guided sorting", "Repetitive precision tasks"],
    approach: [
      { t: "Assess the task", b: "We identify where a robot adds throughput or accuracy, and where it doesn't." },
      { t: "Engineer the cell", b: "Mechanical, control and vision designed together for the job." },
      { t: "Integrate & support", b: "Commissioned on your floor and supported locally." },
    ],
    related: [
      { title: "Industrial Automation", href: "/services/industrial-automation", img: "/assets/magicqc/station-wide.webp", tag: "Service" },
    ],
  },
  {
    slug: "embedded-systems",
    name: "Embedded Systems",
    tag: "Embedded · IoT",
    tagline: "From concept to silicon",
    intro:
      "We develop tailored embedded systems for precision applications. From sensing and firmware to IoT connectivity and a companion app, we take embedded products from concept to implementation and into the field.",
    heroImg: "/assets/work/smart-helmet.webp",
    capabilities: [
      { t: "Sensing & firmware", b: "Microcontrollers, sensors and robust firmware for real devices." },
      { t: "IoT connectivity", b: "Wi-Fi and Bluetooth links to phones and cloud." },
      { t: "Companion apps", b: "Mobile apps that pair with the device for control and alerts." },
      { t: "Product integration", b: "Everything packaged into a working, wearable or installable product." },
    ],
    useCases: ["Connected safety devices", "IoT sensing & telemetry", "Wearables", "Machine retrofits", "Alerting systems"],
    approach: [
      { t: "Define the device", b: "What it senses, what it decides, what it talks to." },
      { t: "Build the stack", b: "Hardware, firmware, connectivity and app, engineered together." },
      { t: "Field it", b: "Validated and deployed in real conditions." },
    ],
    related: [
      { title: "Smart Helmet", href: "/products/smart-helmet", img: "/assets/work/smart-helmet.webp", tag: "IoT product" },
    ],
  },
  {
    slug: "industrial-automation",
    name: "Industrial Automation",
    tag: "Automation",
    tagline: "Optimise manufacturing with intelligent automation",
    intro:
      "We enhance production with bespoke industrial automation, from streamlining workflows to maximising efficiency. Our systems adapt to your existing line, with real-time data collection and less paperwork.",
    heroImg: "/assets/magicqc/station-wide.webp",
    capabilities: [
      { t: "Real-time data collection", b: "Capture the floor as it happens, into your ERP." },
      { t: "Machine integration", b: "Connect existing machines into one digital workflow." },
      { t: "Workflow automation", b: "Remove manual steps between intent and result." },
      { t: "Optimised maintenance", b: "Condition-based maintenance to cut downtime." },
    ],
    useCases: ["Floor data capture", "Paperless production", "Machine connectivity", "Maintenance scheduling", "Throughput optimisation"],
    approach: [
      { t: "Audit the line", b: "We find the highest-ROI points to automate first." },
      { t: "Integrate", b: "Tie machines and steps into one connected workflow." },
      { t: "Measure & iterate", b: "Track the gain and optimise continuously." },
    ],
    related: [
      { title: "RMES", href: "/products/rmes", img: "/assets/video/rmes-poster.webp", tag: "Manufacturing ERP" },
      { title: "MagicQC", href: "/magicqc", img: "/assets/magicqc/operator-panel.webp", tag: "Automated QC" },
    ],
  },
  {
    slug: "vr",
    name: "VR Solutions",
    tag: "Virtual Reality",
    tagline: "Immersive experiences for modern applications",
    intro:
      "We deliver interactive, immersive virtual-reality projects for training, simulation and education. VR lets your team practise and learn in a safe, repeatable, fully-controlled environment.",
    heroImg: "/assets/services/vr.webp",
    capabilities: [
      { t: "Training simulations", b: "Practise high-stakes or expensive procedures safely." },
      { t: "Interactive education", b: "Immersive learning that improves retention." },
      { t: "Process simulation", b: "Model and rehearse operations before they go live." },
      { t: "Custom experiences", b: "Built around your scenario, hardware and goals." },
    ],
    useCases: ["Operator training", "Safety drills", "Education", "Process rehearsal", "Interactive demos"],
    approach: [
      { t: "Scope the scenario", b: "What should the trainee learn or rehearse?" },
      { t: "Build the world", b: "An interactive VR environment tuned to the task." },
      { t: "Deploy & measure", b: "Rolled out on your hardware, with learning tracked." },
    ],
    related: [],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
