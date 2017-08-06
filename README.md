# homeschool_log
A web app to help log school subject hours and activities into a database for tracking and reporting.

The idea is to host this website privately within a home for personal use on something simple like a Raspberry Pi even. The goal is to have a simple interface for the user to quickly log a school activity and time, and whatever else is of importance to a homeschool teacher.

# How this works
* The server computer will store the homeschool db along with hosting the web interface for making entries.
* The site is accessed via phone through the local network.
* * This first go will require connection to my home network until I can figure out how to make it accessible from anywhere, securely.
* The site has buttons to Start/Stop a timer for simple time tracking, but will also allow quick manual entries, too.
* When Start or Stop is pressed, it creates an entry with the timestamp.
* * I can't do an actual timer because this is a website being accessed via phone. It's too easy to lose the website either from being put out of memory from a timeout, or simply accidentally navigating away. The start point being made an entry into a temporary table prevents a loss of this kind.
* * The Start/Stop entries will be in a transitional table meant for storing stars/stops until they can be compared for total time of the class and stored properly as a class event in the main table.
* Another function of the site will be to generate any reports needed.
* Reports in the form of making a .csv file for the date-range specified.

