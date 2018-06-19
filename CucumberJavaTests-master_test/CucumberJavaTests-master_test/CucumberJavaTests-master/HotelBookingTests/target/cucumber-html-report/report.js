$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stories/CreateAndDeleteEntries.feature");
formatter.feature({
  "line": 2,
  "name": "Hotel Booking Create \u0026 Delete Entry",
  "description": "",
  "id": "hotel-booking-create-\u0026-delete-entry",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "verifying create and delete entry",
  "description": "",
  "id": "hotel-booking-create-\u0026-delete-entry;verifying-create-and-delete-entry",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am a loggedIn user on hotel management platform portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I fill the hotel details as \"\u003cHotelName\u003e\", \"\u003cAddress\u003e\",\"\u003cOwner\u003e\",\"\u003cPhoneNumber\u003e\",\"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Create button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to see the hotel details are saved",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I delete the above saved record",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should not see deleted record in the page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "hotel-booking-create-\u0026-delete-entry;verifying-create-and-delete-entry;",
  "rows": [
    {
      "cells": [
        "HotelName",
        "Address",
        "Owner",
        "PhoneNumber",
        "Email"
      ],
      "line": 13,
      "id": "hotel-booking-create-\u0026-delete-entry;verifying-create-and-delete-entry;;1"
    },
    {
      "cells": [
        "Siva",
        "London",
        "Sirigiri",
        "1234567890",
        "test@test.com"
      ],
      "line": 14,
      "id": "hotel-booking-create-\u0026-delete-entry;verifying-create-and-delete-entry;;2"
    },
    {
      "cells": [
        "Siva1",
        "London1",
        "Sirigiri1",
        "1234567891",
        "test1@test1.com"
      ],
      "line": 15,
      "id": "hotel-booking-create-\u0026-delete-entry;verifying-create-and-delete-entry;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12484855910,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verifying create and delete entry",
  "description": "",
  "id": "hotel-booking-create-\u0026-delete-entry;verifying-create-and-delete-entry;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a loggedIn user on hotel management platform portal page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I fill the hotel details as \"Siva\", \"London\",\"Sirigiri\",\"1234567890\",\"test@test.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Create button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to see the hotel details are saved",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I delete the above saved record",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should not see deleted record in the page",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelManagement.i_am_a_loggedIn_user_on_hotel_management_platform_portal_page()"
});
