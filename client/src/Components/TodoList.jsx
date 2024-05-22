import React, { useState, useRef } from "react";
import Filter from "./Filter";
import { AiFillDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { useForm } from "react-hook-form";

const TodoList = ({
  todos,
  completedStatus,
  handleCheckBox
}) => {
  return (
    <>
      {completedStatus === "all"
        ? todos.map((todo) => {
            return (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  onChange={handleCheckBox}
                  checked={todo.completed}
                />
                <p>{todo.task}</p>
              </div>
            );
          })
        : completedStatus === "completed"
        ? todos
            .filter((todo) => todo.completed === true)
            .map((todo) => {
              return (
                <div key={todo.id}>
                  <input
                    type="checkbox"
                    onChange={handleCheckBox}
                    checked={todo.completed}
                  />
                  <p>{todo.task}</p>
                </div>
              );
            })
        : todos
            .filter((todo) => todo.completed === false)
            .map((todo) => {
              return (
                <div key={todo.id}>
                  <input
                    type="checkbox"
                    onChange={handleCheckBox}
                    checked={todo.completed}
                  />
                  <p>{todo.task}</p>
                </div>
              );
            })}
    </>
  );
};

export default TodoList;
