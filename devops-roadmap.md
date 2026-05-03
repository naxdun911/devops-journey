# ☁️ Cloud + DevOps Master Roadmap
### University of Peradeniya | Computer Engineering | 3rd Year
**Commitment:** 50 hrs/week | **Duration:** 9 Months | **Goal:** Job-ready + strong portfolio

---

## 🗓️ PHASE 1 — Foundations (Months 1–2)
> Build the base everything else rests on. No skipping.

### Skills to Learn
- **Linux & Bash Scripting** — The OS of almost every server you'll ever touch
- **Git & GitHub** — Version control, pull requests, branching strategies
- **Python Scripting** — Automation scripts, not full-stack dev
- **Networking Basics** — TCP/IP, DNS, HTTP/S, ports, firewalls (your CE background helps here)
- **YAML & JSON** — Config file formats used in almost every DevOps tool

### Free Resources
| Resource | Certificate? | Link |
|---|---|---|
| **Linux Journey** | ❌ (but essential) | linuxjourney.com |
| **The Odin Project – Command Line** | ❌ | theodinproject.com |
| **CS50P (Python) – Harvard** | ✅ Free LinkedIn cert | cs50.harvard.edu/python |
| **GitHub Foundations Cert** | ✅ Free LinkedIn badge | education.github.com/students |
| **KodeKloud Free Linux Basics** | ✅ Badge | kodekloud.com |

> 💡 **GitHub Student Developer Pack** — Sign up at education.github.com/pack with your university email. You get FREE access to many paid tools and courses.

### 🏗️ Projects
1. **Automated Backup Script** — Write a Bash script that backs up a folder, timestamps it, and logs the output to a file. Push to GitHub.
2. **System Monitor** — Python script that checks CPU/memory usage every 5 minutes and emails an alert if it crosses a threshold. Push to GitHub.
3. **Dotfiles Repo** — Set up your Linux environment and maintain your config files on GitHub (this is actually what DevOps engineers check in each other's GitHub profiles).

---

## 🗓️ PHASE 2 — Cloud Core + AWS (Months 3–4)
> This is where you start becoming hirable.

### Skills to Learn
- **AWS Core Services** — EC2, S3, VPC, IAM, Route53, RDS, CloudWatch
- **AWS Free Tier** — Do ALL practice on this, it's free
- **Cloud Concepts** — Regions, AZs, scaling, load balancing, security groups

### Free Resources
| Resource | Certificate? | Cost |
|---|---|---|
| **AWS Educate** (aws.amazon.com/education/awseducate) | ✅ Free badges postable on LinkedIn | Free |
| **AWS Skill Builder** — Cloud Essentials Learning Path | ✅ Free knowledge badge | Free |
| **freeCodeCamp AWS on YouTube** | ❌ | Free |
| **Stephane Maarek – AWS on YouTube** | ❌ | Free |

### 🏗️ Exam: AWS Certified Cloud Practitioner (CLF-C02)
This is your **first paid exam** — approximately Rs. 15,000–18,000. Here's how to get it cheaper or free:

**How to get a FREE or discounted voucher:**
- **AWS Educate Route (Best Option):** Sign up at aws.amazon.com/education/awseducate with your university email → complete "Introduction to Cloud 101" → earn your badge → join AWS Emerging Talent Community → earn points to redeem for a **100% free exam voucher**
- **AWS Skill Builder** — complete exam prep course + pass practice test with 70%+ → request free voucher through AWS Educate portal
- Once you pass Cloud Practitioner, AWS gives you **50% off your next exam automatically**

### 🏗️ Projects
1. **Host a Static Website on S3** — Deploy a personal portfolio site on AWS S3 with CloudFront CDN. Custom domain via Route53.
2. **Auto-Scaling Web App** — Launch an EC2 instance, put it behind a Load Balancer, set up Auto Scaling Groups. Document with architecture diagram.
3. **Serverless URL Shortener** — Build using AWS Lambda + API Gateway + DynamoDB. Fully serverless, costs almost nothing to run.

---

## 🗓️ PHASE 3 — Containers & Orchestration (Month 5)
> Docker and Kubernetes are non-negotiable for any DevOps job.

### Skills to Learn
- **Docker** — Images, containers, Dockerfile, Docker Compose, volumes, networking
- **Kubernetes (K8s)** — Pods, deployments, services, namespaces, ConfigMaps, ingress
- **Container registries** — Docker Hub, AWS ECR

### Free Resources
| Resource | Certificate? | Cost |
|---|---|---|
| **KodeKloud Docker for Beginners** | ✅ Free cert | Free |
| **KodeKloud Kubernetes for Beginners** | ✅ Free cert | Free |
| **Play with Docker** (labs.play-with-docker.com) | ❌ | Free browser labs |
| **Killercoda** (killercoda.com) | ❌ | Free K8s labs |

### 🏗️ Exam: Kubernetes and Cloud Native Associate (KCNA)
- Cost: ~$250 USD (~Rs. 75,000) — expensive, so skip for now and do CKA later when employed
- Instead, get the **KodeKloud Kubernetes badge** (free + LinkedIn postable) as a stepping stone

### 🏗️ Projects
1. **Dockerize a Python App** — Take any Python app, write a Dockerfile, push to Docker Hub, write a docker-compose.yml with the app + a database.
2. **Deploy on Kubernetes** — Take your Dockerized app, write K8s manifests (deployment, service, ingress), deploy on Minikube locally then on a free K8s cluster (use k3s on a free Oracle Cloud VM).
3. **Multi-container Microservices App** — Build a simple 2-3 service app (e.g., frontend + backend API + database), orchestrate with Docker Compose, then migrate to K8s.

---

## 🗓️ PHASE 4 — CI/CD Pipelines (Month 6)
> This is the heart of DevOps. Master this and you're genuinely dangerous.

### Skills to Learn
- **GitHub Actions** — Workflows, triggers, jobs, secrets management
- **Jenkins** — Pipelines, Jenkinsfiles, integrating with Docker/K8s
- **Concepts** — Build → Test → Deploy automation, blue/green deployments, rollbacks

### Free Resources
| Resource | Certificate? | Cost |
|---|---|---|
| **GitHub Actions official docs + labs** | ✅ GitHub Actions cert (in beta) | Free |
| **KodeKloud Jenkins** | ✅ Badge | Free |
| **CloudBees Jenkins Certification** | ✅ **Completely free cert** | Free (cloudbeesuniversity.com) |

### 🏗️ Projects
1. **Full CI/CD Pipeline with GitHub Actions** — Push code → auto run tests → build Docker image → push to Docker Hub → deploy to AWS EC2. This is a top-tier portfolio project.
2. **Jenkins Pipeline for a Python App** — Set up Jenkins locally, write a Jenkinsfile that runs linting, tests, and deploys with Docker.
3. **Automated Infrastructure Testing** — Add automated security scanning (Trivy for Docker, Checkov for IaC) to your CI pipeline.

---

## 🗓️ PHASE 5 — Infrastructure as Code (Month 7)
> Stop clicking in AWS consoles. Code your infrastructure.

### Skills to Learn
- **Terraform** — Providers, resources, state, modules, workspaces
- **Ansible** — Playbooks, roles, inventory management, configuration management
- **Concepts** — Idempotency, declarative vs. imperative IaC

### Free Resources
| Resource | Certificate? | Cost |
|---|---|---|
| **HashiCorp Learn** (developer.hashicorp.com/terraform/tutorials) | ✅ Free badges | Free |
| **KodeKloud Terraform** | ✅ Badge | Free |
| **KodeKloud Ansible** | ✅ Badge | Free |

### 🏗️ Exam: HashiCorp Terraform Associate
- Cost: ~$70 USD (~Rs. 21,000) — within your budget if saved up
- Highly recognized on job boards — 15,000+ DevOps job postings on Indeed mention Terraform
- Study with free HashiCorp tutorials + KodeKloud labs

### 🏗️ Projects
1. **Terraform AWS Infrastructure** — Write Terraform code to spin up a VPC, EC2 instances, Load Balancer, and RDS database from scratch. Destroy and recreate with one command.
2. **Ansible Server Configuration** — Use Ansible to automatically configure a fresh Ubuntu server: install packages, set up users, configure firewall, deploy your app.
3. **Full IaC Stack** — Combine Terraform (provision) + Ansible (configure) + GitHub Actions (deploy). This 3-in-1 project is interview gold.

---

## 🗓️ PHASE 6 — Monitoring, Security & Advanced AWS (Months 8–9)
> What separates juniors from mid-level engineers.

### Skills to Learn
- **Monitoring** — Prometheus, Grafana, CloudWatch, alerting
- **Logging** — ELK Stack basics, CloudWatch Logs
- **Cloud Security** — IAM best practices, secrets management (AWS Secrets Manager, HashiCorp Vault basics)
- **AWS Advanced** — EKS (Kubernetes on AWS), ECR, Lambda, CloudFormation vs Terraform

### Free Resources
| Resource | Certificate? | Cost |
|---|---|---|
| **Grafana Academy Badges** (grafana.com/learn) | ✅ Free LinkedIn badges | Free |
| **AWS Skill Builder – Security Learning Path** | ✅ Badge | Free |
| **Prometheus docs + Play with Kubernetes** | ❌ | Free |

### 🏗️ Exam: AWS Solutions Architect Associate (SAA-C03)
- Cost: ~$150 USD (~Rs. 45,000) — use your 50% discount from passing Cloud Practitioner
- This is a serious career cert. With this + Terraform Associate, you are genuinely competitive globally.
- Study: Stephane Maarek's course on Udemy (goes on sale for ~Rs. 900 regularly — well within your budget)

### 🏗️ Capstone Projects (Do BOTH — these go on your CV)
1. **Complete DevOps Pipeline Project** — A full end-to-end setup: Terraform provisions AWS infra → Ansible configures servers → GitHub Actions builds and deploys a Dockerized app → Prometheus + Grafana monitors everything. Write a README documenting the full architecture. This is your hero project.
2. **Cloud Cost Optimization Report** — Take a real (or simulated) AWS environment, analyze costs using Cost Explorer, identify waste, implement fixes (right-sizing, Reserved Instances, S3 lifecycle policies). Document findings in a PDF report. This shows business maturity.

---

## 📋 CERTIFICATION TIMELINE SUMMARY

| Month | Certification | Cost | Platform |
|---|---|---|---|
| 1–2 | GitHub Foundations Badge | **Free** | GitHub Education |
| 1–2 | CS50P (Python) | **Free** | Harvard |
| 1–2 | KodeKloud Linux Badge | **Free** | KodeKloud |
| 3–4 | AWS Cloud Practitioner | **Free** (via AWS Educate voucher) | AWS |
| 5 | KodeKloud Docker + K8s Badge | **Free** | KodeKloud |
| 6 | CloudBees Jenkins Cert | **Free** | CloudBees University |
| 7 | HashiCorp Terraform Associate | ~Rs. 21,000 | HashiCorp |
| 8–9 | AWS Solutions Architect Associate | ~Rs. 22,500 (50% off) | AWS |

**Total estimated cost: ~Rs. 43,500** — split across 9 months, very manageable.

---

## 🎯 LINKEDIN PROFILE STRATEGY

Post every certificate immediately when you earn it. Also post:
- "Today I deployed my first Kubernetes cluster" (with a screenshot)
- "Built a full CI/CD pipeline — here's what I learned" (short write-up)
- Your GitHub project links with a brief explanation

Sri Lankan and international recruiters actively search LinkedIn. A profile with 6–8 certs, active project posts, and a GitHub link with real code will get you noticed — even before you graduate.

---

## 💼 WHERE TO APPLY (When Ready — Month 8+)

**Sri Lanka (local):**
- devjobs.lk
- LinkedIn Jobs (filter: Cloud, DevOps, Sri Lanka)
- IFS, WSO2, Sysco LABS, Virtusa, hSenid — all hire DevOps engineers

**Remote (USD salary):**
- Upwork (Cloud/DevOps freelance — start here for experience)
- Turing.com (vetted remote jobs)
- LinkedIn Remote Jobs
- We Work Remotely (weworkremotely.com)

---

## ⚡ WEEKLY TIME BREAKDOWN (50 hrs/week)

| Activity | Hours/Week |
|---|---|
| Structured learning (courses/docs) | 20 hrs |
| Hands-on labs and practice | 15 hrs |
| Building portfolio projects | 10 hrs |
| LinkedIn + writing about what you learned | 3 hrs |
| Review + planning next week | 2 hrs |

---

*Start today. Open a terminal. Type `ls`. That's step one.*
