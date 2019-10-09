import React, { useState, useEffect } from "react";
import { Hook, Console } from "console-feed";

let initial = [
  {
    method: "error",
    data: ["An initial  result"]
  }
];

let getLogs;
export const TheConsole = () => {
  // console.log('rendered')

  const [logs, setLogs] = useState(initial);
  getLogs = () => logs;
  TheConsole.clearConsole = () => {
    console.log("clearing things");
    setLogs(
      (initial = [
        {
          method: "result",
          data: ["Console cleared"]
        }
      ])
    );
    // console.log("cleared things");
  };
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    // console.log("use effect")
    Hook(
      window.console,
      log => {
        setLogs((initial = [...initial, log]));
      },
      false
    );
    return () => {
      if (console.feed) {
        Object.keys(console.feed.pointers).forEach(key => {
          console[key] = console.feed.pointers[key];
        });
      }
    };
  });
  return (
    <div style={{ backgroundColor: "#242424" }}>
      "test"
      <Console logs={logs} variant="dark" />
    </div>
  );
};

if (module.hot) {
  module.hot.dispose(data => {
    // if (console.feed) {
    //   Object.keys(console.feed.pointers).forEach(key => {
    //     console[key] = console.feed.pointers[key];
    //   });
    // }
    // console.log("disposing");
    data.logs = getLogs();
    // console.log(data.logs)
    data.message = "this is a message1";
  });
  if (module.hot.data) {
    console.log("got data");
    initial = module.hot.data.logs;
  } else {
  }
}

if (console.feed) {
  Object.keys(console.feed.pointers).forEach(key => {
    console[key] = console.feed.pointers[key];
  });
}

// /*
// if (console.feed) {
//     for (const method of Object.keys(console.feed.pointers)) {
//       console[method] = console.feed.pointers[method]
//     }
//     return delete console.feed
//   } else {
//     return false
//   }
// */
