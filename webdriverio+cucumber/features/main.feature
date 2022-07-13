Feature:  Basic scenario check webdriverio page

        Scenario: Verify search input in webdriverio page
        Given I am on webdriverio page
        When I click on search
        Then I type text to search
