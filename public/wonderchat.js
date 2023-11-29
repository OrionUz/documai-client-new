console.log("loaded docum-ai-chatbot ");

const removeHttp = (url) => {
  if (url === undefined) {
    return "";
  }

  return url.replace(/^https?:\/\//, "");
};

function isCrossOriginFrame(iframe = undefined) {
  try {
    if (iframe !== undefined) {
      return !iframe?.window?.top?.location.hostname;
    }

    return !window?.top?.location.hostname;
  } catch (e) {
    return true;
  }
}

const documChatWrapper = document.createElement("div");
documChatWrapper.id = "documchat-wrapper";
documChatWrapper.style.zIndex = "-942999";
documChatWrapper.style.background = "transparent";
documChatWrapper.style.overflow = "hidden";
documChatWrapper.style.position = "fixed";
documChatWrapper.style.bottom = "20px";
documChatWrapper.style.right = "20px";
documChatWrapper.style.width = "60px";
documChatWrapper.style.height = "60px";
documChatWrapper.style.borderRadius = "50px";

let widgetOpen = true;

document.body.appendChild(documChatWrapper);

const documChatScript = document.querySelector(
  "script[data-name='docum-ai-chatbot']"
);
let documProjectId = documChatScript?.getAttribute("data-id");

const documChatAddress = documChatScript?.getAttribute("data-address");

const greeting = documChatScript?.getAttribute("greeting");
const dataGreeting = documChatScript?.getAttribute("data-greeting");

const dataIgnorePaths = documChatScript?.getAttribute("data-ignore-paths");
const dataEnv = documChatScript?.getAttribute("data-env")

let widgetSize = documChatScript?.getAttribute("data-widget-size");
let widgetButtonSize = documChatScript?.getAttribute(
  "data-widget-button-size"
);

const VALID_WIDGET_SIZES = {
  normal: {
    height: "630px",
    width: "384px",
  },
  large: {
    height: "800px",
    width: "422px",
  },
};

if (!VALID_WIDGET_SIZES[widgetSize]) {
  widgetSize = "normal";
}

const iframe = document.createElement("iframe");

function getIframeUrl(chatbotId) {
  const protocol = dataEnv === "dev" ? "http":"https"
  let iframeUrl = `${protocol}://${removeHttp(
    documChatAddress
  )}/${chatbotId}`;
  const urlObj = new URL(iframeUrl);
  const documChatParams = new URLSearchParams();

  if (dataGreeting) {
    documChatParams.append("greeting", dataGreeting);
  } else if (greeting) {
    documChatParams.append("greeting", greeting);
  }

  if (widgetButtonSize) {
    documChatParams.append("widgetButtonSize", widgetButtonSize);
  }

  urlObj.search = documChatParams.toString();

  iframeUrl = urlObj.toString();
  return iframeUrl;
}

function changeDocumchatProjectId(chatbotId) {
  documProjectId = chatbotId;
  const iframe = document.getElementById("documChat");
  const iframeUrl = getIframeUrl(chatbotId);
  iframe.setAttribute("src", iframeUrl);
}

let iframeUrl = getIframeUrl(documProjectId);
iframe.setAttribute("src", iframeUrl);

iframe.setAttribute("allow", "fullscreen");
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("scrolling", "no");
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.background = "transparent";
iframe.id = "documChat";

function shouldAppendIframe() {
  if (!dataIgnorePaths) {
    if (!document.getElementById("documChat")) {
      documChatWrapper.style.zIndex = "9249299";
      documChatWrapper?.appendChild(iframe);
    }
  } else {
    const paths = dataIgnorePaths.split(",");
    for (let path of paths) {
      if (path.endsWith("*")) {
        const trimmedPath = path.slice(0, path.length - 2);
        const href = window.location.href;
        if (href.startsWith(trimmedPath)) {
          const iframeToRemove = document.getElementById("documChat");
          if (iframeToRemove) {
            iframeToRemove.parentNode.removeChild(iframeToRemove);
            documChatWrapper.style.zIndex = "-9249299";
          }
          return;
        }
      } else {
        if (path.endsWith("/")) {
          path = path.slice(0, path.length - 1);
        }
        let url = window.location.href;
        if (url.endsWith("/")) {
          url = url.slice(0, path.length - 1);
        }
        if (path === url) {
          const iframeToRemove = document.getElementById("documChat");
          if (iframeToRemove) {
            iframeToRemove.parentNode.removeChild(iframeToRemove);
            documChatWrapper.style.zIndex = "-9249299";
          }
          return;
        }
      }
    }
    if (!document.getElementById("documChat")) {
      documChatWrapper?.appendChild(iframe);
      documChatWrapper.style.zIndex = "9249299";
    }
  }
}

shouldAppendIframe();

let oldHref = document.location.href;

if (dataIgnorePaths) {
  window.onload = function () {
    const bodyList = document.querySelector("body");

    const observer = new MutationObserver(function (mutations) {
      if (oldHref != document.location.href) {
        oldHref = document.location.href;
        shouldAppendIframe();
        /* Changed ! your code here */
      }
    });

    const config = {
      childList: true,
      subtree: true,
    };

    observer.observe(bodyList, config);
  };
}

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm("#documChat").then((elm) => {
  var iframe = document.getElementById("documChat");

  window.addEventListener(
    "message",
    function (e) {
      const address = removeHttp(documChatAddress)
      // console.log('e.origin.match(address)', e.origin.match(address))
      if (!e.origin.match(address?.split('/')?.[0])) {
        return;
      }
      let type;
      let payload;

      try {
        const parsed = JSON.parse(e.data);
        // console.log('parsed', parsed)
        type = parsed?.type;
        payload = parsed?.payload;
      } catch (err) {
        return;
      }

      switch (type) {
        case "showChat": {
          if (payload.isOpen === true) {
            if (window.matchMedia("(min-width: 800px)").matches) {
              iframe.parentNode.style.height = `min(100%, ${VALID_WIDGET_SIZES[widgetSize].height})`;
              iframe.parentNode.style.width = `min(100%, ${VALID_WIDGET_SIZES[widgetSize].width})`;
              iframe.parentNode.style.borderRadius = "8px";
              document.body.style.overflow = "auto";
            } else {
              iframe.parentNode.style.height = "100%";
              iframe.parentNode.style.width = "100%";
              iframe.parentNode.style.borderRadius = "8px";
              document.body.style.setProperty(
                "overflow",
                "hidden",
                "important"
              );
            }
            widgetOpen = true;
          } else {
            iframe.parentNode.style.height =
              widgetButtonSize === "large" ? "60px" : "60px";
            iframe.parentNode.style.width =
              widgetButtonSize === "large" ? "60px" : "60px";
            iframe.parentNode.style.borderRadius = "50px";
            document.body.style.overflow = "auto";
            widgetOpen = false;
          }
          break;
        }
        case "chatbotLoaded":
          const chatHistory = JSON.parse(
            localStorage.getItem(`chatHistory_${documProjectId}`)
              ? localStorage.getItem(`chatHistory_${documProjectId}`)
              : localStorage.getItem(`chatHistory`)
              ? localStorage.getItem(`chatHistory`)
              : "[]"
          );
          const chatlogId =
            localStorage.getItem(`chatlogId_${documProjectId}`) ??
            localStorage.getItem(`chatlogId`) ??
            null;
          const userDetail = JSON.parse(
            this.localStorage.getItem(`userDetail_${documProjectId}`) ??
              this.localStorage.getItem(`userDetail`) ??
              "{}"
          );
          const userToken = localStorage.getItem(`${chatlogId}_token`) ?? null;

          iframe.contentWindow.postMessage(
            JSON.stringify({
              type: "chatHistory",
              payload: {
                chatHistory,
                chatlogId,
                userDetail,
                userToken,
              },
            }),
            "*"
          );
          /* Only check once the chatbot has been loaded */
          /* Only show greeting message if not shown before in this session, and if the widget is closed */
          setTimeout(() => {
            if (
              !sessionStorage.getItem("shouldNotGreet") &&
              !widgetOpen &&
              payload.shouldSpontaneouslyGreet
            ) {
              iframe.contentWindow.postMessage(
                JSON.stringify({ type: "showGreeting" }),
                "*"
              );
              documChatWrapper.style.height = "185px";
              documChatWrapper.style.width = "min(100%, 320px)";
            }
          }, 1000);
          break;

        case "chatbotAcknowledged": {
          sessionStorage.setItem("shouldNotGreet", "1");
          break;
        }
        case "requestWidth": {
          if (window.matchMedia("(min-width: 800px)").matches) {
            iframe.contentWindow.postMessage(
              JSON.stringify({ type: `popup` }),
              "*"
            );
          } else {
            iframe.contentWindow.postMessage(
              JSON.stringify({ type: "fullscreen" }),
              "*"
            );
          }
          break;
        }
        case "chatHistory": {
          const { chatHistory, chatlogId } = payload;
          this.localStorage.setItem(
            `chatHistory_${documProjectId}`,
            JSON.stringify(chatHistory)
          );
          if (chatlogId) {
            this.localStorage.setItem(`chatlogId_${documProjectId}`, chatlogId);
          }
          break;
        }

        case "clearChatHistory": {
          this.localStorage.removeItem(`chatlogId`);
          this.localStorage.removeItem(`chatHistory`);
          this.localStorage.removeItem(`userDetail`);
          this.localStorage.removeItem(`chatlogId_${documProjectId}`);
          this.localStorage.removeItem(`chatHistory_${documProjectId}`);
          this.localStorage.removeItem(`userDetail_${documProjectId}`);
          break;
        }

        /* 
          detail: 'EMAIL' | 'PHONE_NUMBER' | 'NAME'
        */

        case "userDetailCollected": {
          const { detail } = payload;
          const savedDetail =
            this.localStorage.getItem(`userDetail_${documProjectId}`) ??
            this.localStorage.getItem(`userDetail`) ??
            "{}";
          try {
            const parsed = JSON.parse(savedDetail);
            const updatedDetail = { ...parsed, [detail]: true };
            this.localStorage.setItem(
              `userDetail_${documProjectId}`,
              JSON.stringify(updatedDetail)
            );
          } catch (err) {
            console.log(err);
          }
          break;
        }

        case "linkClick": {
          const { href } = payload;
          window.location.href = href;
          break;
        }

        case "chatlogToken": {
          const { chatlogId, userToken } = payload;
          this.localStorage.setItem(`${chatlogId}_token`, userToken);
        }
      }
    },
    false
  );
});