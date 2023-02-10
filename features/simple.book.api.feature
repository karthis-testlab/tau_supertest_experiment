@api
Feature: Simple Book API used to handle the books, authors and category in the library

    Scenario: Welcoming the user to the simple book api application
    Given User use the simple book api url endpoint to access the library data
    When the user hit the get method to access the welcome message
    Then the user should able to get the relevant Welcoming response from the simple book api