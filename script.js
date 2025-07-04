let currentVisitCard = null

// Page navigation
function showPage(pageId) {
  const pages = document.querySelectorAll(".page")
  pages.forEach((page) => page.classList.add("hidden"))
  document.getElementById(pageId).classList.remove("hidden")
}

// Modal functions
function showModal(modalId) {
  document.getElementById(modalId).classList.remove("hidden")
}

function hideModal(modalId) {
  document.getElementById(modalId).classList.add("hidden")
}

// Customer profile function
function showCustomerProfile(customerName, industry) {
  document.getElementById("customer-name").textContent = customerName
  document.getElementById("customer-industry").textContent = `Industri ${industry}`
  showPage("customer-profile-page")
  showTab("profil")
}

// Tab switching
function showTab(tabName) {
  const tabPanes = document.querySelectorAll(".tab-pane")
  tabPanes.forEach((pane) => pane.classList.add("hidden"))
  document.getElementById(tabName + "-content").classList.remove("hidden")

  const tabLinks = document.querySelectorAll(".tab-link")
  tabLinks.forEach((link) => {
    link.classList.remove("border-sky-500", "text-sky-600")
    link.classList.add("border-transparent", "text-slate-500")
  })

  const activeTab = document.querySelector(`[data-tab="${tabName}"]`)
  if (activeTab) {
    activeTab.classList.remove("border-transparent", "text-slate-500")
    activeTab.classList.add("border-sky-500", "text-sky-600")
  }
}

// Add event listeners for tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".tab-link")
  tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const tabName = this.getAttribute("data-tab")
      showTab(tabName)
    })
  })
})

// Filter customers
function filterCustomers() {
  const searchTerm = document.getElementById("customer-search").value.toLowerCase()
  const industryFilter = document.getElementById("industry-filter").value
  const statusFilter = document.getElementById("status-filter").value
  const rows = document.querySelectorAll(".customer-row")

  rows.forEach((row) => {
    const name = row.getAttribute("data-name").toLowerCase()
    const industry = row.getAttribute("data-industry")
    const status = row.getAttribute("data-status")

    const matchesSearch = name.includes(searchTerm)
    const matchesIndustry = industryFilter === "all" || industry === industryFilter
    const matchesStatus = statusFilter === "all" || status === statusFilter

    if (matchesSearch && matchesIndustry && matchesStatus) {
      row.style.display = ""
    } else {
      row.style.display = "none"
    }
  })
}

// Filter visits
function filterVisits() {
  const searchTerm = document.getElementById("visit-customer-search").value.toLowerCase()
  const sortOrder = document.getElementById("visit-sort-order").value
  const visitCards = Array.from(document.querySelectorAll("#visit-list .visit-card"))

  visitCards.forEach((card) => {
    const customer = card.getAttribute("data-customer").toLowerCase()
    if (customer.includes(searchTerm)) {
      card.style.display = ""
    } else {
      card.style.display = "none"
    }
  })

  const visibleCards = visitCards.filter((card) => card.style.display !== "none")
  visibleCards.sort((a, b) => {
    const dateA = new Date(a.getAttribute("data-date"))
    const dateB = new Date(b.getAttribute("data-date"))
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB
  })

  const container = document.getElementById("visit-list")
  visibleCards.forEach((card) => container.appendChild(card))
}

// Filter visits in customer tab
function filterVisitsTab() {
  const sortOrder = document.getElementById("visit-sort-order-tab").value
  const visitCards = Array.from(document.querySelectorAll("#visit-list-tab .visit-card"))

  visitCards.sort((a, b) => {
    const dateA = new Date(a.getAttribute("data-date"))
    const dateB = new Date(b.getAttribute("data-date"))
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB
  })

  const container = document.getElementById("visit-list-tab")
  visitCards.forEach((card) => container.appendChild(card))
}

// Filter and sort sales plans
function filterAndSortSalesPlans() {
  const searchTerm = document.getElementById("sales-customer-search").value.toLowerCase()
  const statusFilter = document.getElementById("status-filter-sales").value
  const sortOrder = document.getElementById("sales-sort-order").value
  const salesCards = Array.from(document.querySelectorAll("#sales-plan-list .sales-plan-card"))

  salesCards.forEach((card) => {
    const customer = card.getAttribute("data-customer").toLowerCase()
    const status = card.getAttribute("data-status")

    const matchesSearch = customer.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || status === statusFilter

    if (matchesSearch && matchesStatus) {
      card.style.display = ""
    } else {
      card.style.display = "none"
    }
  })

  const visibleCards = salesCards.filter((card) => card.style.display !== "none")
  visibleCards.sort((a, b) => {
    const dateA = new Date(a.getAttribute("data-date"))
    const dateB = new Date(b.getAttribute("data-date"))
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB
  })

  const container = document.getElementById("sales-plan-list")
  visibleCards.forEach((card) => container.appendChild(card))
}

// Filter and sort sales plans in tab
function filterAndSortSalesPlansTab() {
  const statusFilter = document.getElementById("status-filter-sales-tab").value
  const sortOrder = document.getElementById("sort-order-tab").value
  const salesCards = Array.from(document.querySelectorAll("#sales-plan-list-tab .sales-plan-card"))

  salesCards.forEach((card) => {
    const status = card.getAttribute("data-status")
    const matchesStatus = statusFilter === "all" || status === statusFilter

    if (matchesStatus) {
      card.style.display = ""
    } else {
      card.style.display = "none"
    }
  })

  const visibleCards = salesCards.filter((card) => card.style.display !== "none")
  visibleCards.sort((a, b) => {
    const dateA = new Date(a.getAttribute("data-date"))
    const dateB = new Date(b.getAttribute("data-date"))
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB
  })

  const container = document.getElementById("sales-plan-list-tab")
  visibleCards.forEach((card) => container.appendChild(card))
}

// Change sales status function
function changeSalesStatus(button, newStatus) {
  const card = button.closest(".sales-plan-card")
  const statusBadge = card.querySelector(".status-badge")

  statusBadge.textContent = newStatus
  statusBadge.className = "status-badge"

  if (newStatus === "Closed-Won") {
    statusBadge.classList.add("bg-emerald-100", "text-emerald-800")
  } else if (newStatus === "Closed-Lost") {
    statusBadge.classList.add("bg-red-100", "text-red-800")
  }

  card.setAttribute("data-status", newStatus)

  const buttonContainer = button.parentElement
  buttonContainer.style.display = "none"

  alert(`Status berhasil diubah menjadi ${newStatus}`)
}

// Mark visit as completed
function markVisitCompleted(button) {
  currentVisitCard = button.closest(".visit-card")
  showModal("visit-completion-modal")
}

// Save visit completion
function saveVisitCompletion() {
  const status = document.getElementById("visit-completion-status").value
  const report = document.getElementById("visit-completion-report").value

  if (!report.trim()) {
    alert("Mohon isi laporan visit terlebih dahulu")
    return
  }

  // Hide the visit from planning and add to results
  if (currentVisitCard) {
    currentVisitCard.style.display = "none"

    // Create new visit result entry (this would normally be saved to database)
    const visitTitle = currentVisitCard.querySelector(".font-semibold").textContent
    const customerName = currentVisitCard.getAttribute("data-customer")

    alert(`Visit "${visitTitle}" berhasil diselesaikan dengan status: ${status}`)
  }

  hideModal("visit-completion-modal")

  // Clear form
  document.getElementById("visit-completion-status").value = "Sukses"
  document.getElementById("visit-completion-report").value = ""
  currentVisitCard = null
}

// Save pain points function
function savePainPoints() {
  hideModal("pain-points-modal")
  document.getElementById("pain-points-empty").classList.add("hidden")
  document.getElementById("pain-points-filled").classList.remove("hidden")
  alert("Pain points berhasil disimpan!")
}

// Close modals when clicking backdrop
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-backdrop")) {
    const modal = e.target.closest(".modal")
    if (modal) {
      modal.classList.add("hidden")
    }
  }
})

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login-page").classList.remove("hidden")
})
