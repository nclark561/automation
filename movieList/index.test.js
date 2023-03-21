const { Builder, Capabilities, By } = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async() => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async() => {
    await driver.quit()
})

let movie = 'Avatar'

test('', async() => {
    const addBar = await driver.findElement(By.tagName('input'))
    await addBar.sendKeys(`${movie}\n`)
    await driver.sleep(1000)
})

// test('delete movies functionality', async() => {
//     const movieItems = await driver.findElements(By.xpath(`//ul/li`)).then(el => {
//         return el.length
//     })
//     await driver.findElement(By.id(`${movie}`)).click()
//     await driver.sleep(3000)
//     const deletedMovie = await driver.findElements(By.xpath(`//ul/li`)).then(el => {
//         return el.length
//     })
//     expect(deletedMovie).toEqual(movieItems-1)
// })


test('test if crossed off', async() => {
    await driver.findElement(By.xpath(`//span[text()='${movie}']`)).click()
    const crossedOff = await driver.findElements(By.className("checked"))
    await driver.sleep(3000)
    expect(crossedOff.length).toBe(1)
})