import { createOnceSwitcher } from "~core"
import { IDENTITY } from "./events"
import { create } from "./valueObjects"

const createReduce = createOnceSwitcher(create, IDENTITY)

export { createReduce }
