# Playwright

## 个人总结
感觉用Playwright写前端的testing主要包括：
- Page
    - 去到某个页面：`await Page.GotoAsync("https://playwright.dev");`
- Locators
    - 在某个页面下，寻找一个Locator：`var getStarted = Page.GetByRole(AriaRole.Link, new() { Name = "Get started" });`
- Assertions
    - 预期某个Locator有什么内容：`await Expect(getStarted).ToHaveAttributeAsync("href", "/docs/intro");`
- Actions
    - 对某个Locator进行操作：`await getStarted.ClickAsync();`