using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace PlaywrightTests;

[Parallelizable(ParallelScope.Self)]
[TestFixture]
public class Tests : PageTest
{
    [Test]
    public async Task HomepageHasPlaywrightInTitleAndGetStartedLinkLinkingtoTheIntroPage()
    {
        await Page.GotoAsync("http://localhost:8000/");

        // Expect a title "to contain" a substring.
        await Expect(Page).ToHaveTitleAsync(new Regex("匠人学院"));

        // create a locator
        var getStarted = Page.GetByRole(AriaRole.Link, new() { Name = "训练营" });

        // // Expect an attribute "to be strictly equal" to the value.
        await Expect(getStarted).ToHaveAttributeAsync("href","/bootcamp/");

        // // Click the get started link.
        await getStarted.ClickAsync();

        // // Expects page to have a heading with the name of Installation.
        await Expect(Page
            .GetByRole(AriaRole.Heading, new() { Name = "训练营" }))
            .ToBeVisibleAsync();
    }

}