import "@testing-library/jest-dom/vitest"
import "@testing-library/jest-dom"

import * as matchers from "vitest-axe/matchers"
import { expect } from "vitest"
expect.extend(matchers)
