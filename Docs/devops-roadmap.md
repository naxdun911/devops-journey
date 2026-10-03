# Cloud + DevOps Master Roadmap
**Naxdun (E/21/254 - Manilgama N.C.) | Computer Engineering, University of Peradeniya**

**Commitment:** 50 hrs/week | **Duration:** 9 months | **Goal:** Remote USD DevOps/Cloud role (secondary: WSO2, Sysco LABS, IFS, Virtusa)

*Single source of truth. Replaces `roadmap-md.md`, `devops-roadmap.md`, `devops-roadmap-master.md` and the Sep 2026 PDF. Prices verified Sep 2026, 1 USD ≈ 328 LKR.*

*Last updated: 02 Oct 2026*

---

## Current Status

> **Phase 1: Foundations** (in progress)
>
> Linux ✅ → Bandit 0-20 ✅ → Bash (shellscript.sh) ✅ → Addressbook CLI ✅ → **NEXT: Backup script (hero project seed)** → System monitor (Python) → CS50P → Dotfiles → Git/YAML/Networking gaps

---

## Core Principles

If a phase conflicts with these, the principle wins.

1. **One growing hero project, not six tutorial projects.** Every phase extends the previous phase's work.
2. **Build first, then certify.** Finish the phase project before booking the phase exam.
3. **5 services, not 500.** EC2, S3, VPC, IAM, Lambda. Master these deeply before anything else.
4. **Concepts over syntax.** Declarative infra, idempotency, immutability, orchestration outlast tool versions.
5. **Public work beats private brilliance.** Weekly commits, one blog post per phase.

---

## The Hero Project Chain

One idea, extended every phase: a **self-hosted backup + monitoring service**.

| Phase | What you add | Result |
|---|---|---|
| 1 Foundations | Bash script: backs up a folder, timestamps, logs, rotates old files | Runs via cron on Ubuntu. Public on GitHub |
| 2 AWS Core | Rewrite in Python, deploy as Lambda, S3 with lifecycle rules, IAM role, CloudWatch logs | Serverless on free tier, ~$0/month |
| 3 Containers | Flask/FastAPI companion API (list/restore backups). Docker Compose locally, k3s in cloud | Multi-container app on k3s (Oracle Cloud free tier) |
| 4 CI/CD | GitHub Actions: test, build, Trivy scan, push image, deploy to k3s | Push code, it deploys. Zero manual steps |
| 5 IaC | Terraform provisions AWS infra, Ansible configures k3s node, remote state | `terraform destroy` + `apply` rebuilds everything in <10 min |
| 6 Observability | Prometheus + Grafana dashboards, Alertmanager to email | Production-grade CV project with architecture diagram |

---

## PHASE 1: Foundations (Months 1-2)
*Linux, Bash, Git, Python, YAML, Networking*

### Skills
- [x] Linux fundamentals: Linux Journey (Grasshopper + Journeyman)
- [x] OverTheWire Bandit levels 0-20
- [x] Bash scripting: shellscript.sh curriculum complete
- [x] Addressbook exercise (menu-driven, colon-delimited flat file) *(done 02 Oct 2026)*
- [ ] *Optional:* Dave Eddy "Complete Bash Scripting Course" (YouTube, ysap.sh). Watch only: quoting/word splitting, traps, arrays, process substitution, shellcheck. ~4-6 hrs
- [ ] Git & GitHub: branches, PRs, rebase basics, commit hygiene, SSH auth (already using daily; close gaps)
- [ ] Python: CS50P (Harvard) → certificate
- [ ] YAML & JSON: indentation, anchors, lists vs maps
- [ ] Networking: TCP/IP, DNS, HTTP/S, ports, CIDR (compress, CE degree covers most)

> KodeKloud Linux Basics is now **paid**. Skipped. Linux Journey + Bandit already cover it.

### Resources
| Resource | Type | Cost |
|---|---|---|
| Linux Journey | Tutorial | Free ✅ |
| OverTheWire Bandit | Hands-on | Free ✅ |
| shellscript.sh | Tutorial | Free ✅ |
| Dave Eddy Bash Course (ysap.sh) | YouTube | Free (optional) |
| ShellCheck (shellcheck.net) | Linter | Free |
| Harvard CS50P | Course + cert | Free |
| MIT Missing Semester | Video course | Free |
| Learn Git Branching | Interactive | Free |
| GitHub Foundations (GH-900) | Cert | Free via GitHub Student Pack |

### Projects (in order)
- [x] Addressbook CLI (Bash)
- [ ] **Backup script (Bash)** ← NEXT. Hero project seed. Lives in `bash/projects/backup-script/`
  - Source folder as arg/config
  - Timestamped archive: `tar` + `$(date +%Y%m%d_%H%M%S)`
  - Log every run (what, when, success/fail)
  - Rotate backups older than N days
  - Error handling: missing source, disk full, permission denied, `set -euo pipefail`, `trap`
  - Headless, runs from `cron`
  - Passes `shellcheck` clean
- [ ] System monitor (Python): CPU/RAM check every 5 min, email on threshold, runs as systemd service *(after CS50P)*
- [ ] Dotfiles repo: `.bashrc`, `.vimrc`, tmux config in Git

### Milestone check
- [ ] Bash script safely handles filenames with spaces; correct `while IFS= read -r` usage
- [ ] Can explain `ls | grep foo` at process/file-descriptor level
- [ ] Public GitHub with 3+ commits/week for the last month

---

## PHASE 2: AWS Cloud Core (Months 3-4)
*5 core services deeply, not 500 shallowly*

### Skills
- [ ] EC2: instance types, key pairs, security groups, EBS, AMIs
- [ ] S3: buckets, lifecycle rules, versioning, presigned URLs, static hosting
- [ ] VPC: subnets, route tables, NAT, SG vs NACL, VPC endpoints
- [ ] IAM: users, roles, policies, least privilege, assume-role, MFA
- [ ] Lambda + API Gateway: triggers, IAM roles, CloudWatch logs
- [ ] CloudWatch: metrics, log groups, alarms
- [ ] Python for AWS: `boto3`, `argparse`, `os`, `subprocess`, `json`, `yaml`, `requests`

### Resources
| Resource | Type | Cost |
|---|---|---|
| AWS Skill Builder (free tier) | Official courses | Free |
| AWS Educate | Labs + credits + 50% voucher | Free (uni email) |
| AWS Cloud Quest: Cloud Practitioner | Gamified labs | Free |
| Andrew Brown CLF-C02 (freeCodeCamp) | 14-hr video | Free |
| Stephane Maarek CLF-C02 (Udemy) | Paid course | ~$15 on sale only |
| AWS Free Tier | Real usage | Free |

### Projects
- [ ] Static portfolio: S3 + CloudFront + Route 53 custom domain (warmup)
- [ ] **Hero:** backup service as Python Lambda, EventBridge cron, S3 with lifecycle rules
- [ ] *Optional:* serverless URL shortener (Lambda + API Gateway + DynamoDB)

### Certification: AWS Cloud Practitioner (CLF-C02)
- Cost: $100 (~Rs. 32,800). With AWS Educate 50% voucher: **$50 (~Rs. 16,400)**
- 65 questions, 90 min, 700/1000 to pass
- Passing unlocks 50% off your next AWS exam
- Note: AWS Educate 100% free vouchers ended 31 Aug 2025
- [ ] Pass exam

---

## PHASE 3: Containers & Kubernetes (Month 5)
*The 20% of Docker/K8s that covers 80% of real use*

### Skills
- [ ] Docker: images, layers, Dockerfile, ENTRYPOINT vs CMD, volumes, networks
- [ ] Docker Compose: multi-container, healthchecks, depends_on
- [ ] Kubernetes: Pods, Deployments, Services, ConfigMaps, Secrets, Ingress
- [ ] kubectl fluency: write manifests without Googling basics
- [ ] Registries: Docker Hub, GHCR, AWS ECR

### Resources
| Resource | Type | Cost |
|---|---|---|
| Docker official getting-started | Docs | Free |
| KodeKloud Docker / K8s for Beginners | Course + badge | Verify still free before relying |
| Play with Docker | Browser labs | Free |
| Killercoda | K8s browser labs | Free |
| Kubernetes.io tutorials | Docs | Free |
| TechWorld with Nana K8s crash course | YouTube | Free |

### Projects
- [ ] **Hero:** Dockerise backup code + Flask/FastAPI companion API + Postgres via Compose
- [ ] Deploy on Minikube: Deployment, Service, Ingress manifests
- [ ] **Hero:** migrate to k3s on Oracle Cloud free tier, public URL

> Skip CKA/CKAD/CKS (~$395) and KCNA (~$250) for now. A public k3s lab beats the badge.

---

## PHASE 4: CI/CD Pipelines (Month 6)
*GitHub Actions deep; Jenkins only if a target role needs it*

### Skills
- [ ] GitHub Actions: workflows, jobs, matrix, secrets, environments, reusable workflows, OIDC to AWS
- [ ] Pipeline pattern: build → test → scan → package → deploy
- [ ] Deployment strategies: blue/green, canary, rolling, rollback
- [ ] Security scanning: Trivy, Checkov, Dependabot
- [ ] *Optional:* Jenkins, GitLab CI

### Resources
| Resource | Type | Cost |
|---|---|---|
| GitHub Actions docs + Skills labs | Official | Free |
| freeCodeCamp GitHub Actions course | YouTube | Free |
| CloudBees University Jenkins | Cert | Free |
| Trivy / Checkov docs | Docs | Free |

### Projects
- [ ] **Hero:** push → pytest → Docker build → Trivy scan → push registry → deploy to k3s
- [ ] Signed commits + branch protection
- [ ] OIDC from Actions to AWS (no long-lived keys)

---

## PHASE 5: Infrastructure as Code (Month 7)
*Stop clicking*

### Skills
- [ ] Terraform: providers, resources, remote state (S3 + DynamoDB lock), modules, workspaces, for_each/count
- [ ] Terraform workflow: plan/apply in CI, module versioning
- [ ] Ansible: inventory, playbooks, roles, handlers, Jinja2, idempotency
- [ ] Concepts: declarative vs imperative, drift, immutable vs mutable
- [ ] Awareness: OpenTofu (open-source Terraform fork)

### Resources
| Resource | Type | Cost |
|---|---|---|
| HashiCorp Developer tutorials | Official | Free |
| Ansible official docs | Docs | Free |
| KodeKloud Terraform / Ansible | Course + badge | Verify still free |
| Stephane Maarek Terraform Associate | Udemy | ~$15 on sale |

### Projects
- [ ] **Hero:** Terraform all AWS infra (S3, Lambda, IAM, VPC), destroy/recreate in one command
- [ ] Ansible playbook for k3s node: install, SSH hardening, firewall
- [ ] Combined: Terraform provisions → Ansible configures → GitHub Actions deploys

### Certification: HashiCorp Terraform Associate (003/004)
- Cost: **$70.50 (~Rs. 23,100)**, no student discount
- ~57 questions, 60 min, online proctored, valid 2 years
- [ ] Pass exam

---

## PHASE 6: Observability, Security & Advanced AWS (Months 8-9)

### Skills
- [ ] Prometheus: scrape configs, PromQL, exporters, alert rules
- [ ] Grafana: dashboards, data sources, variables, alerting
- [ ] Logging: CloudWatch Logs, structured logging, aggregation basics
- [ ] Cloud security: IAM policy JSON, Secrets Manager, KMS, VPC endpoints
- [ ] Advanced AWS: EKS overview, ECR, Route 53 routing, CloudFormation vs Terraform
- [ ] Cost: Cost Explorer, right-sizing, lifecycle rules, Reserved Instances basics

### Resources
| Resource | Type | Cost |
|---|---|---|
| Prometheus docs | Official | Free |
| Grafana Academy | Courses + badges | Free |
| PromLabs PromQL cheat sheet | Reference | Free |
| AWS Skill Builder Security path | Official | Free |
| Stephane Maarek SAA-C03 | Udemy | ~$15 on sale |
| Adrian Cantrill SAA-C03 | Paid deep-dive | ~$40 |

### Projects (finale)
- [ ] **Hero:** Prometheus + Grafana on k3s; dashboards for backup success rate, Lambda cold starts, API p50/p95/p99; Alertmanager to email
- [ ] README with architecture diagram (draw.io / Excalidraw)
- [ ] Blog post: "What I built in 9 months and what broke"
- [ ] Cloud cost optimisation write-up on the hero project's AWS bill

### Certification: AWS Solutions Architect Associate (SAA-C03)
- Cost: $150 (~Rs. 49,200). With 50% voucher from CLF-C02: **$75 (~Rs. 24,600)**
- 65 questions, 130 min, 720/1000 to pass, valid 3 years
- [ ] Pass exam

---

## Certification Timeline & Costs (verified Sep 2026)

| Month | Certification | List | With discount | LKR |
|---|---|---|---|---|
| 1-2 | GitHub Foundations (GH-900) | $99 | Free (Student Pack) | Free |
| 1-2 | Harvard CS50P | Free | Free | Free |
| 3-4 | AWS Cloud Practitioner | $100 | $50 | Rs. 16,400 |
| 5 | Docker/K8s badges (KodeKloud, if free) | Free | Free | Free |
| 6 | CloudBees Jenkins | Free | Free | Free |
| 7 | Terraform Associate | $70.50 | none | Rs. 23,100 |
| 8-9 | AWS SAA-C03 | $150 | $75 | Rs. 24,600 |

**Realistic total: ~Rs. 64,100**

### Money-saving playbook
1. Apply to GitHub Student Developer Pack (free GH-900 voucher)
2. Register AWS Educate with university email (credits, labs, 50% voucher)
3. Buy Udemy courses only during sales (~$15)
4. Watch re:Invent / AWS Summit for voucher drops
5. Pass CLF-C02 first; next-exam 50% voucher is automatic

---

## Job Hunt (Month 8+)

**Sri Lanka:** WSO2, Sysco LABS, IFS, Virtusa, hSenid, 99x, Creative Software. Boards: devjobs.lk, LinkedIn (Cloud/DevOps, Sri Lanka)

**Remote USD:** Turing, We Work Remotely, Upwork (start early for reviews), RemoteOK, Working Nomads, Himalayas, LinkedIn Remote filter

**Interview practice**
- Interview before you feel ready; first 5 will be rough
- Pramp / interviewing.io mock interviews
- A "what went wrong" story for every project
- Know your salary floor; accepting ~30% less for the first role is realistic

---

## Public Presence (from Month 1)
- GitHub: weekly commits, hero project public from day 1, one commit per finished project (no batching)
- Blog: one post per phase on dev.to or Hashnode
- LinkedIn: post each cert the day you earn it, project milestones, 2x/week
- X/Twitter: optional

---

## Weekly Time Split (50 hrs)

| Activity | Hours |
|---|---|
| Structured learning | 18 |
| Hands-on terminal / labs | 15 |
| Hero project work | 12 |
| Writing (blog + LinkedIn) | 3 |
| Review + plan (Sunday) | 2 |

---

## Progress Log

| Date | Completed |
|---|---|
| Before Sep 2026 | Linux Journey, Bandit 0-20, shellscript.sh |
| 02 Oct 2026 | Addressbook CLI (Bash) |

*Living document. Update checkboxes and the log after every milestone. When prices, exam versions or tool licences change, update this file instead of trusting memory.*
