import { screen, within, fireEvent } from "@testing-library/react"
import { renderWithProviders } from "../../utils/test-utils.tsx"
import PullRequests from "./PullRequests"
import { axe } from "vitest-axe"

describe("Pull Requests", () => {
  let renderedComponent: HTMLElement
  beforeEach(() => {
    const { container } = renderWithProviders(<PullRequests />)
    renderedComponent = container
  })

  it("should show spinner initially", async () => {
    const spinner = screen.getByRole("progressbar")
    expect(spinner).toBeInTheDocument()
  })

  it("should hide spinner when data loads", async () => {
    const spinner = screen.getByRole("progressbar")
    await screen.findByText(
      "DD-1004-add-cats | Add support for displaying cats",
    )
    expect(spinner).not.toBeInTheDocument()
  })

  it("should show data columns", async () => {
    const titleColumn = await screen.findByText(
      "DD-1004-add-cats | Add support for displaying cats",
    )
    expect(titleColumn).toBeInTheDocument()

    const labelChips = await screen.findAllByTestId("label-chip")
    expect(labelChips.length).toBe(2)

    const dateColumn = await screen.findByText("10/26/2020, 11:02 AM")
    expect(dateColumn).toBeInTheDocument()

    const pullRequestButton = await screen.findByRole("link", {
      name: "View Pull Request",
    })
    expect(pullRequestButton).toHaveAttribute(
      "href",
      "https://github.com/divvydose/ui-coding-challenge/pull/5",
    )
  })

  it("should filter table", async () => {
    await screen.findByText(
      "DD-1004-add-cats | Add support for displaying cats",
    )
    const autoComplete = screen.getByTestId("auto-complete")
    const autoCompleteInput = within(autoComplete).getByRole("combobox")
    autoCompleteInput.focus()

    fireEvent.change(autoCompleteInput, { target: { value: "animals" } })
    fireEvent.keyDown(autoComplete, { key: "ArrowDown" })
    fireEvent.keyDown(autoComplete, { key: "Enter" })

    const selectedTokens = screen.getAllByTestId("selected-label")
    expect(selectedTokens.length).toBe(1)
  })

  it.skip("should have no accessibility violations", async () => {
    expect(await axe(renderedComponent)).toHaveNoViolations()
  })
})
