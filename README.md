# gr

# About
A simple store-locator for people seeking to find the closest store near a specified location.

# How it works?
The logic is cur

Understanding how to calculate the distance between longitude and latitude points did take bulk of my time. I ended up using the "Haversine Formula" to calculate the distance between the two locations.

Spent some time thinking about the data-structure I wanted to use for the data within the .csv, but I ultimately decided to keep it simple and in a sorted array. Other data structures that I was contemplating on using included a BinarySearchTree as well as a MinHeap, but I decided that neither suited my needs given my time constraint as well as their complexity.