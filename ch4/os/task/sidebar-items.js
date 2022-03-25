initSidebarItems({"fn":[["current_trap_cx","Get the current ‘Running’ task’s trap contexts."],["current_user_token","Get the current ‘Running’ task’s token."],["exit_current_and_run_next","Exit the current ‘Running’ task and run the next task in task list."],["mark_current_exited","Change the status of current `Running` task into `Exited`."],["mark_current_suspended","Change the status of current `Running` task into `Ready`."],["run_first_task","Run the first task in task list."],["run_next_task","Switch current `Running` task to the task we have found, or there is no `Ready` task and we can exit with all applications completed"],["suspend_current_and_run_next","Suspend the current ‘Running’ task and run the next task in task list."]],"mod":[["context","Implementation of [`TaskContext`]"],["switch","Rust wrapper around `__switch`."],["task","Types related to task management"]],"struct":[["TASK_MANAGER","a ‘TaskManager’ instance through lazy_static!"],["TaskManager","The task manager, where all the tasks are managed."],["TaskManagerInner","The task manager inner in ‘UPSafeCell’"]]});