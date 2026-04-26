(function () {
  "use strict";

  const CONFIG = {
    YM_COUNTER_ID: 108656678,
    links: {
      money: {
        max: "https://max.ru/your_bot",
        telegram: "https://t.me/your_bot?start=money",
        vk: "https://vk.com/im?sel=-your_group",
      },
      anxiety: {
        max: "https://max.ru/your_bot",
        telegram: "https://t.me/your_bot?start=anxiety",
        vk: "https://vk.com/im?sel=-your_group",
      },
      relationships: {
        max: "https://max.ru/your_bot",
        telegram: "https://t.me/your_bot?start=relationships",
        vk: "https://vk.com/im?sel=-your_group",
      },
      change: {
        max: "https://max.ru/your_bot",
        telegram: "https://t.me/your_bot?start=change",
        vk: "https://vk.com/im?sel=-your_group",
      },
    },
  };

  function reachGoal(goalName) {
    if (typeof window.ym === "function") {
      window.ym(CONFIG.YM_COUNTER_ID, "reachGoal", goalName);
    }
  }

  document.querySelectorAll("[data-event][data-channel]").forEach(function (link) {
    const eventName = link.getAttribute("data-event");
    const channel = link.getAttribute("data-channel");
    const url = CONFIG.links[eventName] && CONFIG.links[eventName][channel];

    if (url) {
      link.setAttribute("href", url);
    }

    link.addEventListener("click", function () {
      reachGoal("registration_click");
      reachGoal("registration_" + eventName);
      reachGoal("registration_" + eventName + "_" + channel);
    });
  });

})();
