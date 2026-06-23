const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const contactForm = document.querySelector("[data-contact-form]");
const formFeedback = document.querySelector("[data-form-feedback]");
const calendarGrid = document.querySelector("[data-calendar-grid]");
const calendarMonth = document.querySelector("[data-calendar-month]");
const calendarSubtitle = document.querySelector("[data-calendar-subtitle]");
const eventTitle = document.querySelector("[data-event-title]");
const eventDescription = document.querySelector("[data-event-description]");
const eventList = document.querySelector("[data-event-list]");
const todayLabel = document.querySelector("[data-today]");
const prevMonthButton = document.querySelector("[data-prev-month]");
const nextMonthButton = document.querySelector("[data-next-month]");

const events = [
  {
    date: "2026-06-29",
    endDate: "2026-06-29",
    title: "Semana de Estudos Intensivos",
    description: "Semana de Estudos Intensivos.",
  },
  {
    date: "2026-06-30",
    endDate: "2026-06-30",
    title: "Reunião da APM",
    description: "Reunião da Diretoria.",
  },
  {
    date: "2026-07-03",
    endDate: "2026-07-03",
    title: "Conselho de Classe",
    description: "Conselho de Classe.",
  },
  {
    date: "2026-07-06",
    endDate: "2026-07-06",
    title: "Reunião da APM",
    description: "Reunião do Conselho Fiscal.",
  },
  {
    date: "2026-07-07",
    endDate: "2026-07-07",
    title: "Férias Docentes",
    description: "Férias Docentes.",
  },
  {
    date: "2026-07-09",
    endDate: "2026-07-09",
    title: "Feriado/ponto Facultativo",
    description: "Revolução Constitucionalista de 1932.",
  },
  {
    date: "2026-07-10",
    endDate: "2026-07-10",
    title: "Ponto Facultativo",
    description: "Emenda de Feriado.",
  },
  {
    date: "2026-07-22",
    endDate: "2026-07-23",
    title: "Replanejamento",
    description: "Replanejamento.",
  },
  {
    date: "2026-07-27",
    endDate: "2026-07-27",
    title: "Reunião de Pais/responsáveis",
    description: "Reunião com Pais/responsáveis.",
  },
  {
    date: "2026-07-30",
    endDate: "2026-07-30",
    title: "Reunião da APM",
    description: "Reunião da Diretoria.",
  },
  {
    date: "2026-08-06",
    endDate: "2026-08-06",
    title: "Reunião do Conselho de Escola",
    description: "Reunião do Conselho de Escola.",
  },
  {
    date: "2026-08-12",
    endDate: "2026-08-12",
    title: "Feriado Municipal",
    description: "Feriado Municipal Dia do Evangélico.",
  },
  {
    date: "2026-08-14",
    endDate: "2026-08-14",
    title: "Letivo",
    description: "Dia letivo.",
  },
  {
    date: "2026-08-15",
    endDate: "2026-08-15",
    title: "Letivo",
    description: "Reposição do Dia 12/08/2026 - Feriado do Dia do Evangélico.",
  },
  {
    date: "2026-08-28",
    endDate: "2026-08-28",
    title: "Reunião da APM",
    description: "Reunião do Conselho Deliberativo.",
  },
  {
    date: "2026-08-31",
    endDate: "2026-08-31",
    title: "Reunião da APM",
    description: "Reunião da Diretoria.",
  },
  {
    date: "2026-09-07",
    endDate: "2026-09-07",
    title: "Feriado/ponto Facultativo",
    description: "Dia da Independência do Brasil.",
  },
  {
    date: "2026-09-28",
    endDate: "2026-10-02",
    title: "Semana de Estudos Intensivos",
    description: "Semana de Estudos Intensivos.",
  },
  {
    date: "2026-09-30",
    endDate: "2026-09-30",
    title: "Reunião da APM",
    description: "Reunião da Diretoria.",
  },
  {
    date: "2026-10-06",
    endDate: "2026-10-06",
    title: "Reunião do Conselho de Escola",
    description: "Reunião do Conselho de Escola.",
  },
  {
    date: "2026-10-12",
    endDate: "2026-10-12",
    title: "Feriado/ponto Facultativo",
    description: "Nossa Senhora Aparecida.",
  },
  {
    date: "2026-10-13",
    endDate: "2026-10-13",
    title: "Eleição do Grêmio Estudantil",
    description: "Assembleia do Grêmio Estudantil.",
  },
  {
    date: "2026-10-14",
    endDate: "2026-10-14",
    title: "Reunião de Pais/responsáveis",
    description: "Reunião com Pais/responsáveis.",
  },
  {
    date: "2026-10-15",
    endDate: "2026-10-15",
    title: "Feriado Escolar",
    description: "Dia do Professor.",
  },
  {
    date: "2026-10-19",
    endDate: "2026-10-19",
    title: "Conselho de Classe",
    description: "Reunião de Conselho de Classe.",
  },
  {
    date: "2026-10-28",
    endDate: "2026-10-28",
    title: "Feriado/ponto Facultativo",
    description: "Dia do Funcionário Público.",
  },
  {
    date: "2026-11-02",
    endDate: "2026-11-02",
    title: "Feriado/ponto Facultativo",
    description: "Finados.",
  },
  {
    date: "2026-11-15",
    endDate: "2026-11-15",
    title: "Feriado/ponto Facultativo",
    description: "Proclamação da República.",
  },
  {
    date: "2026-11-20",
    endDate: "2026-11-20",
    title: "Feriado Estadual",
    description: "Consciência Negra.",
  },
  {
    date: "2026-11-30",
    endDate: "2026-11-30",
    title: "Reunião da APM",
    description: "Reunião do Conselho Deliberativo.",
  },
  {
    date: "2026-12-03",
    endDate: "2026-12-03",
    title: "Conselho de Classe",
    description: "Conselho de Classe.",
  },
  {
    date: "2026-12-07",
    endDate: "2026-12-11",
    title: "Semana de Estudos Intensivos",
    description: "Semana de Estudos Intensivos.",
  },
  {
    date: "2026-12-08",
    endDate: "2026-12-08",
    title: "Feriado Municipal",
    description: "Dia da Padroeira da Cidade de Campinas.",
  },
  {
    date: "2026-12-10",
    endDate: "2026-12-10",
    title: "Reunião da APM",
    description: "Reunião do Conselho Fiscal.",
  },
  {
    date: "2026-12-11",
    endDate: "2026-12-11",
    title: "Reunião da APM",
    description: "Assembleia Geral da APM.",
  },
  {
    date: "2026-12-15",
    endDate: "2026-12-15",
    title: "Reunião de Pais/responsáveis",
    description: "Reunião com Pais/responsáveis.",
  },
];

const today = new Date();
let visibleDate = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedDateKey;

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

function getEvents(dateKey) {
  return events.filter((event) => dateKey >= event.date && dateKey <= event.endDate);
}

function getInitialEventDateKey() {
  const todayKey = formatDateKey(today);
  const upcomingEvent = events
    .slice()
    .sort((first, second) => first.date.localeCompare(second.date))
    .find((event) => event.date >= todayKey);

  return upcomingEvent ? upcomingEvent.date : todayKey;
}

function renderCalendar() {
  const year = visibleDate.getFullYear();
  const month = visibleDate.getMonth();
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  }).format(visibleDate);

  calendarMonth.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  calendarSubtitle.textContent = "Agenda da escola";
  calendarGrid.innerHTML = "";

  const firstDay = new Date(year, month, 1);
  const startDate = new Date(year, month, 1 - firstDay.getDay());

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);

    const dateKey = formatDateKey(date);
    const dayEvents = getEvents(dateKey);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.setAttribute("aria-label", formatLongDate(date));
    button.dataset.date = dateKey;

    if (date.getMonth() !== month) {
      button.classList.add("is-muted");
    }

    if (dateKey === formatDateKey(today)) {
      button.classList.add("is-today");
    }

    if (dayEvents.length) {
      button.classList.add("has-event");
    }

    if (dateKey === selectedDateKey) {
      button.classList.add("is-selected");
    }

    const eventLabel = dayEvents.length > 1 ? `${dayEvents[0].title} +${dayEvents.length - 1}` : dayEvents[0]?.title;
    button.innerHTML = `<span>${date.getDate()}</span>${eventLabel ? `<small>${eventLabel}</small>` : ""}`;
    calendarGrid.appendChild(button);
  }

  renderEvents();
}

function renderEvents() {
  const selectedEvents = getEvents(selectedDateKey);
  const selectedDate = new Date(`${selectedDateKey}T12:00:00`);

  eventTitle.textContent = selectedEvents.length
    ? selectedEvents.map((event) => event.title).join(" + ")
    : formatLongDate(selectedDate);
  eventDescription.textContent = selectedEvents.length
    ? selectedEvents.map((event) => event.description).join(" / ")
    : "Nenhum evento cadastrado para este dia.";

  eventList.innerHTML = "";

  events
    .slice()
    .sort((first, second) => first.date.localeCompare(second.date))
    .slice(0, 6)
    .forEach((event) => {
      const item = document.createElement("li");
      const date = new Date(`${event.date}T12:00:00`);
      const endDate = new Date(`${event.endDate}T12:00:00`);
      const startDay = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
      const endDay = endDate.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
      const day = event.date === event.endDate ? startDay : `${startDay} - ${endDay}`;
      const weekday = date.toLocaleDateString("pt-BR", { weekday: "short" }).replace(".", "");
      item.innerHTML = `<time>${day}<span>${weekday}</span></time><strong>${event.title}</strong><small>${event.description}</small>`;
      eventList.appendChild(item);
    });
}

selectedDateKey = getInitialEventDateKey();
syncHeader();
renderCalendar();
todayLabel.textContent = formatLongDate(today);

window.addEventListener("scroll", syncHeader);

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

calendarGrid.addEventListener("click", (event) => {
  const day = event.target.closest("[data-date]");

  if (!day) {
    return;
  }

  selectedDateKey = day.dataset.date;
  renderCalendar();
});

prevMonthButton.addEventListener("click", () => {
  visibleDate = new Date(visibleDate.getFullYear(), visibleDate.getMonth() - 1, 1);
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  visibleDate = new Date(visibleDate.getFullYear(), visibleDate.getMonth() + 1, 1);
  renderCalendar();
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = String(data.get("nome") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("mensagem") || "").trim();

  if (!name || !email || !message) {
    formFeedback.textContent = "Preencha todos os campos para enviar.";
    return;
  }

  formFeedback.textContent = "Mensagem registrada. Atualize o projeto para conectar um envio real.";
  contactForm.reset();
});
