(function () {
  "use strict";

  const CONFIG = {
    YM_COUNTER_ID: 108656678,
    links: {
      money: {
        max: "https://s.salebot.pro//psi-reg-money_20",
        telegram: "https://s.salebot.pro//psi-reg-money_1",
        vk: "https://vk.ru/app7062840#psi-reg-money&force=1",
      },
      anxiety: {
        max: "https://s.salebot.pro//psi-reg-anxiety_20",
        telegram: "https://s.salebot.pro//psi-reg-anxiety_1",
        vk: "https://vk.ru/app7062840#psi-reg-anxiety&force=1",
      },
      relationships: {
        max: "https://s.salebot.pro//psi-reg-relationships_20",
        telegram: "https://s.salebot.pro//psi-reg-relationships_1",
        vk: "https://vk.ru/app7062840#psi-reg-relationships&force=1",
      },
      change: {
        max: "https://s.salebot.pro//psi-reg-change_20",
        telegram: "https://s.salebot.pro//psi-reg-change_1",
        vk: "https://vk.ru/app7062840#psi-reg-change&force=1",
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
