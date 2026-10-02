(function () {
  "use strict";

  var projects = {
    "ad-lab": {
      title: "Active Directory Home Lab",
      category: "Systems administration",
      year: "Ongoing",
      background: "A Windows Server environment built from a bare VM to practice the same identity tasks that run in real organizations: creating users and groups, delegating access, and enforcing settings through Group Policy.",
      responsibilities: [
        "Installed Windows Server and promoted a domain controller",
        "Created and organized user accounts, groups, and organizational units",
        "Wrote and tested Group Policy Objects for security and desktop settings",
        "Joined Windows client machines to the domain and verified logon behaviour"
      ],
      outcomes: [
        "A repeatable build document for standing the lab up from scratch",
        "Working examples of role-based access through group membership",
        "Hands-on familiarity with everyday directory administration tasks"
      ]
    },
    "health-network": {
      title: "Hospital Network Design",
      category: "Network design",
      year: "Ongoing",
      background: "A coursework-style design project: plan a network for a mid-sized hospital, where clinical, administrative, and guest traffic must stay separate and available around the clock.",
      responsibilities: [
        "Gathered requirements and mapped departments to network segments",
        "Designed the addressing plan and VLAN layout",
        "Selected and configured Cisco devices in Packet Tracer / GNS3",
        "Planned redundancy for critical services and documented the design"
      ],
      outcomes: [
        "A segmented topology separating staff, clinical, and guest traffic",
        "Documented IP plan and configuration notes",
        "Practical experience balancing security with availability requirements"
      ]
    },
    "virt-lab": {
      title: "Virtualization & SIEM Lab",
      category: "Virtualization",
      year: "Ongoing",
      background: "A multi-VM environment used to study how services are isolated and monitored. Virtual machines feed event logs to a central collector so activity across the lab can be reviewed in one place.",
      responsibilities: [
        "Built and networked multiple VMs on a hypervisor",
        "Configured log forwarding from each machine to a central SIEM",
        "Wrote basic detection rules and practised alert triage",
        "Snapshot and restore procedures to keep the lab reproducible"
      ],
      outcomes: [
        "Central visibility of logs across the whole lab",
        "Faster rebuilds thanks to documented snapshots and procedures",
        "Foundational SIEM experience applicable to security operations work"
      ]
    },
    "azure-endpoint": {
      title: "Azure & Endpoint Management",
      category: "Cloud & security",
      year: "Ongoing",
      background: "Study and lab work around Microsoft cloud administration: identity in Microsoft Entra ID, device enrolment and policy through Intune, and endpoint protection with Microsoft Defender.",
      responsibilities: [
        "Worked through Microsoft Learn Azure and security paths",
        "Practised user and device management concepts in a tenant",
        "Explored compliance policies and conditional access fundamentals",
        "Documented configurations for reuse in future environments"
      ],
      outcomes: [
        "35 Microsoft Learn modules completed across 9 learning paths (16 hr 56 min)",
        "A working understanding of cloud identity and endpoint management",
        "Study notes that feed directly into lab and coursework work"
      ]
    },
    "python": {
      title: "Python Automation Scripts",
      category: "Automation",
      year: "Ongoing",
      background: "Small, practical scripts written to remove repetitive work: checking inventories, organizing files, and wrapping routine administrative commands.",
      responsibilities: [
        "Identified repetitive tasks worth automating",
        "Wrote and tested scripts with clear usage notes",
        "Handled errors so failures are visible rather than silent",
        "Published scripts to GitHub with README documentation"
      ],
      outcomes: [
        "A small library of reusable utilities on GitHub",
        "Less manual effort on routine checks",
        "Stronger scripting habits carried into larger automation work"
      ]
    },
    "web-dev": {
      title: "Web Development Portfolio",
      category: "Web development",
      year: "2022 – 2025",
      background: "Frontend practice spanning class assignments and personal sites — semantic HTML, careful CSS, and progressively enhanced JavaScript.",
      responsibilities: [
        "Built pages and small sites with semantic, accessible markup",
        "Styled layouts with CSS, including responsive grids",
        "Added behaviour with vanilla JavaScript where it improved the experience",
        "Reviewed and refactored earlier projects as skills grew"
      ],
      outcomes: [
        "A portfolio of coursework and personal web projects",
        "Working knowledge of responsive, accessible frontend practices",
        "This site — designed, built, and maintained by hand"
      ]
    }
  };

  var dialog = document.getElementById("project-dialog");
  var dialogMeta = document.getElementById("dialog-meta");
  var dialogTitle = document.getElementById("dialog-title");
  var dialogBackground = document.getElementById("dialog-background");
  var dialogResponsibilities = document.getElementById("dialog-responsibilities");
  var dialogOutcomes = document.getElementById("dialog-outcomes");
  var closeButton = dialog.querySelector(".dialog-close");
  var lastTrigger = null;

  function fillList(container, items) {
    container.textContent = "";
    items.forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      container.appendChild(li);
    });
  }

  function openProject(key, trigger) {
    var project = projects[key];
    if (!project) return;

    lastTrigger = trigger || null;
    dialogMeta.textContent = project.category + " · " + project.year;
    dialogTitle.textContent = project.title;
    dialogBackground.textContent = project.background;
    fillList(dialogResponsibilities, project.responsibilities);
    fillList(dialogOutcomes, project.outcomes);

    dialog.showModal();
    closeButton.focus();
  }

  function closeDialog() {
    dialog.close();
    if (lastTrigger) {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function () {
      openProject(card.getAttribute("data-project"), card);
    });
  });

  closeButton.addEventListener("click", closeDialog);

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      closeDialog();
    }
  });

  dialog.addEventListener("cancel", function () {
    var trigger = lastTrigger;
    lastTrigger = null;
    if (trigger) {
      setTimeout(function () {
        trigger.focus();
      }, 0);
    }
  });
})();
