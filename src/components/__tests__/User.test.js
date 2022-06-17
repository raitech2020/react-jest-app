import {render, screen, cleanup} from "@testing-library/react"
import renderer from "react-test-renderer"
import User from "../User"

test("render illegal user component", () => {
    const user = {id: 1, name: "John", age: 15}
    render(<User user={user}/>)
    // define userElement
    const userElement = screen.getByTestId(`user-${user.id}`)
    // expect userElement to be in DOM
    expect(userElement).toBeInTheDocument()
    // expect userElement to have text James
    expect(userElement).toHaveTextContent("John")
    expect(userElement).toContainHTML("red")
})

afterEach(() => {
    cleanup()
})

test("render legal user component", () => {
    const user = {id: 2, name: "Alan", age: 40}
    render(<User user={user}/>)
    // define userElement
    const userElement = screen.getByTestId(`user-${user.id}`)
    // expect userElement to be in DOM
    expect(userElement).toBeInTheDocument()
    // expect userElement to have text James
    expect(userElement).toHaveTextContent("Alan")
    expect(userElement).toContainHTML("green")
})

test("matches snapshot", () => {
    const user = {id: 1, name: "John", age: 15}
    const tree = renderer.create(<User user={user}/>).toJSON()
    expect(tree).toMatchSnapshot()
})
