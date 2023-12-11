import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const [tobeUpdated, setTobeUpdated] = useState([]);

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {tobeUpdated.includes(t.id) === true ? (
            <>
              <input
                type="text"
                value={t.text}
                onChange={(e) => {
                  const newTasks = tasks;
                  newTasks.forEach((nt) => {
                    if (nt.id === t.id) {
                      nt.text = e.target.value;
                    }
                    onChangeTask(nt);
                  });
                }}
              />
              <button
                onClick={() => {
                  setTobeUpdated((prev) => {
                    const arr = prev;
                    return arr.filter((itm) => {
                      if (itm !== t.id) return true;
                    });
                  });
                }}
              >
                up
              </button>
            </>
          ) : (
            <>
              <span key={t.id}> {t.text}</span>
              <button
                onClick={() => {
                  setTobeUpdated((prev) => {
                    if (!prev.includes(t.id)) {
                      return [...prev, t.id];
                    } else {
                      return prev;
                    }
                  });
                }}
              >
                ed
              </button>
            </>
          )}
          <button onClick={() => onDeleteTask(t.id)}> del</button>
        </li>
      ))}
    </ul>
  );
}
