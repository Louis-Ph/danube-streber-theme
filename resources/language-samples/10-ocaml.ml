type status =
  | Ready
  | Running
  | Failed of string

type task = {
  name : string;
  priority : int;
  state : status;
}

let render task =
  match task.state with
  | Ready -> Printf.sprintf "%s:%d ready" task.name task.priority
  | Running -> Printf.sprintf "%s:%d running" task.name task.priority
  | Failed reason -> Printf.sprintf "%s:%d failed (%s)" task.name task.priority reason

let () =
  let sample = { name = "compiler"; priority = 3; state = Running } in
  print_endline (render sample)
