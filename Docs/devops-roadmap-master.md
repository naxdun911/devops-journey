# ☁️ Cloud + DevOps Master Roadmap
### University of Peradeniya | Computer Engineering | 3rd Year
**Commitment:** 50 hrs/week | **Duration:** 9 months | **Goal:** Remote USD DevOps/Cloud role (secondary: WSO2, Sysco LABS, IFS, Virtusa)

*Merged from `roadmap-md.md` + `devops-roadmap.md`. Check items off as you go.*

---

## 📍 Current Status

> **Phase 1 — Foundations** ← you are here
> Linux ✅ → Bash scripting ✅ (shellscript.sh curriculum complete) → **next: addressbook exercise** → backup script / system monitor / dotfiles projects → CS50P

---

## 🗓️ PHASE 1 — Foundations (Months 1–2)
> Build the base everything else rests on. No skipping.

### Skills
- [x] **Linux fundamentals** — Linux Journey (Grasshopper + Journeyman), OverTheWire Bandit (levels 0–20 complete)
- [ ] KodeKloud Linux Basics Course → certificate
- [x] **Bash scripting** — shellscript.sh: scripting vs compiled, POSIX vs Bash, variables/quoting, arithmetic `$(( ))`, `export`/env scoping, globbing & expansion order, `chmod`/permissions, `read`, `while` loops, `shift`, `[ ]` vs `[[ ]]`, external programs (`grep`/`cut`/pipes)
  - [ ] **Addressbook exercise** — colon-delimited flat-file addressbook applying the above ← **next task**
- [ ] Git & GitHub — version control, branching, PRs *(already using day-to-day via `devops-journey`/`semester-06` repos, SSH auth — formalize gaps if any)*
- [ ] Python Scripting — CS50P (Harvard) → certificate
  - *Note: DevOps-relevant libraries (`subprocess`, `os`, `json`, `yaml`, `requests`, `boto3`, `argparse`) are deferred to the AWS phase, not covered in CS50P*
- [ ] Networking Basics — TCP/IP, DNS, HTTP/S, ports, firewalls
- [ ] YAML & JSON — config formats

### Free Resources
| Resource | Certificate? | Link |
|---|---|---|
| Linux Journey | ❌ (but essential) | linuxjourney.com |
| The Odin Project – Command Line | ❌ | theodinproject.com |
| CS50P (Python) – Harvard | ✅ Free LinkedIn cert | cs50.harvard.edu/python |
| GitHub Foundations Cert | ✅ Free LinkedIn badge | education.github.com/students |
| KodeKloud Free Linux Basics | ✅ Badge | kodekloud.com |

> 💡 GitHub Student Developer Pack — education.github.com/pack (university email) — check if registered yet.
> 💡 AWS Educate — register with university email for free cert vouchers — check if registered yet.

### 🏗️ Projects
- [ ] Automated Backup Script (Bash) — backs up a folder, timestamps it, logs output. Push to GitHub. *(lives in `bash/projects/backup-script/`)*
- [ ] System Monitor (Python) — checks CPU/memory every 5 min, emails alert on threshold breach. Push to GitHub.
- [ ] Dotfiles Repo — Linux env config on GitHub

---

## 🗓️ PHASE 2 — Cloud Core + AWS (Months 3–4)
> This is where you start becoming hirable.

### Skills
- [ ] AWS Core Services — EC2, S3, VPC, IAM, Route53, RDS, CloudWatch
- [ ] AWS Free Tier — do all practice here
- [ ] Cloud Concepts — regions, AZs, scaling, load balancing, security groups
- [ ] Python DevOps libraries — `subprocess`, `os`, `json`, `yaml`, `requests`, `boto3`, `argparse`

### Free Resources
| Resource | Certificate? |
|---|---|
| AWS Educate (aws.amazon.com/education/awseducate) | ✅ Free badges |
| AWS Skill Builder — Cloud Essentials Learning Path | ✅ Free badge |
| freeCodeCamp AWS (YouTube) | ❌ |
| Stephane Maarek – AWS (YouTube) | ❌ |

### 🏗️ Exam: AWS Certified Cloud Practitioner (CLF-C02)
- [ ] AWS Educate → "Introduction to Cloud 101" → badge → Emerging Talent Community → free exam voucher
- [ ] Or: Skill Builder exam prep + 70%+ practice test → free voucher via AWS Educate
- [ ] Pass exam (unlocks 50% off next AWS exam)

### 🏗️ Projects
- [ ] Static website on S3 + CloudFront + Route53 custom domain
- [ ] Auto-Scaling web app — EC2 + Load Balancer + ASG, with architecture diagram
- [ ] Serverless URL shortener — Lambda + API Gateway + DynamoDB

---

## 🗓️ PHASE 3 — Containers & Orchestration (Month 5)
> Docker and Kubernetes are non-negotiable for any DevOps job.

### Skills
- [ ] Docker — images, containers, Dockerfile, Compose, volumes, networking
- [ ] Kubernetes — Pods, deployments, services, namespaces, ConfigMaps, ingress
- [ ] Container registries — Docker Hub, AWS ECR

### Free Resources
| Resource | Certificate? |
|---|---|
| KodeKloud Docker for Beginners | ✅ Free cert |
| KodeKloud Kubernetes for Beginners | ✅ Free cert |
| Play with Docker | ❌ Free browser labs |
| Killercoda | ❌ Free K8s labs |

> KCNA exam (~$250) — skip for now, do CKA later once employed. Get the free KodeKloud K8s badge instead.

### 🏗️ Projects
- [ ] Dockerize a Python app + docker-compose with a database
- [ ] Deploy on Kubernetes — manifests, Minikube → k3s on Oracle Cloud free tier
- [ ] Multi-container microservices app (frontend + backend + DB), Compose → K8s

---

## 🗓️ PHASE 4 — CI/CD Pipelines (Month 6)
> The heart of DevOps.

### Skills
- [ ] GitHub Actions — workflows, triggers, jobs, secrets
- [ ] Jenkins — pipelines, Jenkinsfiles, Docker/K8s integration
- [ ] Concepts — build→test→deploy automation, blue/green, rollbacks

### Free Resources
| Resource | Certificate? |
|---|---|
| GitHub Actions docs + labs | ✅ Cert (beta) |
| KodeKloud Jenkins | ✅ Badge |
| CloudBees Jenkins Certification (cloudbeesuniversity.com) | ✅ Free |

### 🏗️ Projects
- [ ] Full CI/CD with GitHub Actions — push → test → build Docker image → push to Docker Hub → deploy to EC2
- [ ] Jenkins pipeline for a Python app — linting, tests, Docker deploy
- [ ] Add security scanning to pipeline — Trivy (Docker), Checkov (IaC)

---

## 🗓️ PHASE 5 — Infrastructure as Code (Month 7)
> Stop clicking in the AWS console.

### Skills
- [ ] Terraform — providers, resources, state, modules, workspaces
- [ ] Ansible — playbooks, roles, inventory, config management
- [ ] Concepts — idempotency, declarative vs imperative IaC

### Free Resources
| Resource | Certificate? |
|---|---|
| HashiCorp Learn tutorials | ✅ Free badges |
| KodeKloud Terraform | ✅ Badge |
| KodeKloud Ansible | ✅ Badge |

### 🏗️ Exam: HashiCorp Terraform Associate (~$70 / ~Rs. 21,000)
- [ ] Study via HashiCorp tutorials + KodeKloud labs
- [ ] Pass exam

### 🏗️ Projects
- [ ] Terraform AWS infra — VPC + EC2 + Load Balancer + RDS, destroy/recreate with one command
- [ ] Ansible server config playbook — packages, users, firewall, app deploy
- [ ] Combined: Terraform + Ansible + GitHub Actions

---

## 🗓️ PHASE 6 — Monitoring, Security & Advanced AWS (Months 8–9)
> What separates juniors from mid-level engineers.

### Skills
- [ ] Monitoring — Prometheus, Grafana, CloudWatch, alerting
- [ ] Logging — ELK basics, CloudWatch Logs
- [ ] Cloud Security — IAM best practices, Secrets Manager, Vault basics
- [ ] AWS Advanced — EKS, ECR, Lambda, CloudFormation vs Terraform

### Free Resources
| Resource | Certificate? |
|---|---|
| Grafana Academy Badges (grafana.com/learn) | ✅ Free |
| AWS Skill Builder – Security Learning Path | ✅ Badge |
| Prometheus docs + Play with Kubernetes | ❌ |

### 🏗️ Exam: AWS Solutions Architect Associate (SAA-C03, ~$150 / ~Rs. 22,500 with 50% off)
- [ ] Study — Stephane Maarek Udemy course
- [ ] Pass exam

### 🏗️ Capstone Projects (do both)
- [ ] **Hero project** — Terraform provisions infra → Ansible configures servers → GitHub Actions builds/deploys Dockerized app → Prometheus + Grafana monitors it all. Full README with architecture diagram.
- [ ] Cloud Cost Optimization Report — analyze real/simulated AWS costs, identify waste, implement fixes, document in a report

---

## 📋 Certification Timeline

| Month | Certificate | Cost |
|---|---|---|
| 1–2 | GitHub Foundations Badge | Free |
| 1–2 | CS50P — Harvard | Free |
| 1–2 | KodeKloud Linux Badge | Free |
| 3–4 | AWS Cloud Practitioner | Free (AWS Educate voucher) |
| 5 | KodeKloud Docker + K8s Badges | Free |
| 6 | CloudBees Jenkins Certificate | Free |
| 7 | HashiCorp Terraform Associate | ~Rs. 21,000 |
| 8–9 | AWS Solutions Architect Associate | ~Rs. 22,500 (50% off) |

**Total cost: ~Rs. 43,500 across 9 months**

---

## 💼 Where to Apply (Month 8+)

**Sri Lanka**
- WSO2 — best brand name, serious cloud work
- Sysco LABS — best culture, real AWS scale
- IFS — stable, enterprise experience
- Virtusa — easier entry, move on after 1–2 years
- hSenid, devjobs.lk, LinkedIn Jobs (filter: Cloud/DevOps/Sri Lanka)

**Remote (USD)**
- Turing (turing.com)
- Upwork (start freelancing early)
- We Work Remotely (weworkremotely.com)
- LinkedIn Remote Jobs

---

## 🎯 LinkedIn Strategy
Post every certificate immediately when earned. Also post:
- "Today I deployed my first Kubernetes cluster" (with screenshot)
- "Built a full CI/CD pipeline — here's what I learned" (short write-up)
- GitHub project links with brief explanation

---

## ⚡ Weekly Time Split (50 hrs/week)

| Activity | Hours |
|---|---|
| Structured learning | 20 hrs |
| Hands-on terminal / labs | 15 hrs |
| Building projects | 10 hrs |
| LinkedIn + writing about learning | 3 hrs |
| Review + planning | 2 hrs |

---

*Last updated: Phase 1 — Bash scripting complete, addressbook exercise next.*
