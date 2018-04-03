# Production Problem 04: Implementing HCI Guidelines for Touchscreens

## The Problem

Using the HCI guidelines from either Apple/iOS, Android/Google, or Windows, redesign the login page at
http://my.iit.edu/ for a touch-friendly environment. Use this to kickstart your work on Project 2.

**You only need to sketch your redesign**, and in the text below, reference at least three different
points of guidance from chosen HCI guidelines that went into your redesign sketches (you might
want to do multiple sketches, each highlighting a different feature of the same overall design).
Focus on touch-related elements.

## Resources

* Apple iOS HCI Guidlines:
  https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/
* Android:
  https://developer.android.com/design/index.html
* Windows Desktop Guidelines:
  https://developer.microsoft.com/en-us/windows/desktop/design

## Deliverables

Small commits to your Production Problems repository that include:

1) photographs of sketches of your new design, from your sketchbook
2) an explanation of three different points of guidance from your chosen guidelines (point to the
   specific URL where the guidance can be found) that you implemented in your sketch, written below:

* HCI Guidline One (URL): https://material.io/guidelines/components/bottom-sheets.html#bottom-sheets-specs
* How you implemented it in your sketch: Android has a guideline for using a feature called "Bottom Sheets."  This is a feature that has an additional "sheet" pop-up from the bottom of the screen with more information.  I used this idea to use a bottom sheet that contains support information that one might need when on the login page. See hcig-bottom-sheet.jpg for the sketch.

* HCI Guidline Two (URL): https://material.io/guidelines/components/text-fields.html#text-fields-layout
* How you implemented it in your sketch: The text field section of Android's design guidelines helped me figure out how to prompt users for their user name and password.  I kept Android's style by having a bottom border on the field and having a label above the field.  Not shown in the sketch is the bottom-border changing in thickness and/or color depending on the status/error.  If the user selects the text box, the bottom border changes to blue to hint that the text box is the selected text box.  The bottom border will be thicker and turn red if the user inputs an invalid email, blank field, or incorrect password.

* HCI Guidline Three (URL): https://material.io/guidelines/style/imagery.html#imagery-best-practices
* How you implemented it in your sketch: Android's image guidelines summarize that images need a point of focus.  For the upper 3rd of the home page, I centered the MyIIT logo and placed it over the IIT banner. When the page is loaded, the user will be gravitated to these two images and will know that they are on the MyIIT login page.
