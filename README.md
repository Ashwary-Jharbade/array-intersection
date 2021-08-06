# array-intersection
Finding the intersecting elements in between two array's in minumum number of iteration

# Naive Approach - Alogrithm 

Algorithm start:
* step1 - Initialize 2 array's arr1 and arr2 with values entered by user.
* step2 - Initialize an empty array arr3. 
* step3 - Initialize 2 variables i and j with value 0.
* step4 - Sort arr1 and arr2 in ascending order
* step5 - "Loop Start" 
*              Now start a loop over sorted array's according to their respective length
*              with iterators i and j.
*              step 5.1   - Compare ith and jth value of arr1 and arr2
*              step 5.2  - If value matches store ith value of arr1 in arr3
*              step 5.3 -  Or check the values from array's arr1 and arr2 at there 
*                                respective indexes
*                                If arr1 has small value  at its ith index as compare to arr2 at its 
*                                jth index increment ith iterator by 1
*              step 5.4 -  or  increment the jth iterator by 1
*            "Loop end"
* step6. print array arr3 containing intersected elements
Algorithm end

###
Suppose, length of arr1 is "m" and length of arr2  is "n"  and arr1 has greater length than arr2 then,

Time Complexity: O(m)
Reason: loop could run till the length of largest array

Space Complexity: O(n)
Reason: The size of additional memory required would be less than or equal to the size of the smallest array n in terms of the number of elements.

# Optimised Approach - Alogrithm

* Step 1   - Check if array elements are not valid of empty
 * Step 1.1 - If true, then return response
 * Step 2   - Create an object obj_map to save array references & matchedArray for storing intersection
 * Step 3   - Get your 1st array & iterate it completely and save all elements into obj_map i.e. {key: value}
 * Step 4   - Once done with the first loop, go to iterate the second loop
 * Step 5   - Iterate the 2nd array
 * Step 6   - Get the current element & check if element is not matching or exist inside obj_map[currentElement]
 * Step 6.1 - If not matching then continue the loop
 * Step 7   - Save the matched element into matchedArray
 * Step 8   - Check if the size of matchedArrayElements is 0
 * Step 8.1 - If true, return no match found
 * Step 9    - Return matchedArray response 
