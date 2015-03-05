```Javascript
$("document").ready(function() {
    
    // Select div that that have a specific class
    $("div[class=active]").addClass("className");
    $("div[class]").addClass("className"); // has any class
    $("div[class^=active_]").addClass("className"); // class starts with "active_"
    $("div[class^=active_][id*=product_]").addClass("className"); // Same as above, + ID contains "product_"
    
    // Select paragraphs that are imidiate childs of a div
    $("div > p").addClass("className");
    
    // Select paragraphs that have a div as their parent
    $("div p").addClass("className");
    $("div p.btn").addClass("className"); // and has a specific class
    
    // Select all divs that are immediately after a paragraph
    $("p + div").addClass("className");
    
    // Select all li that are after a specific ID
    $("#theID ~ li").addClass("className");
    
    // Select divs that have a specific data type and are wrapped in a specific ID
    $("#wrapper div[data-type='active']").addClass("className");
    
    // Select all elements that are children of a specific ID
    $("#theID").children().addClass("className");
    
    // Select all parents until a specific point
    $("#theID").parentsUntil($("body")).addClass("className");
    
    // Select next / previous to our selected element
    $("#theID").prev().addClass("className");
    $("#theID").next().addClass("className");
    
    // Select divs that have at least one child
    $("div:parent").addClass("className");
    
    // Select links that contain a specific string
    $("a:contains('Click here')").addClass("className");
    
    // Child selectors
    $("ul li:first-child").addClass("className"); // First li in a list
    $("ul li:last-of-type").addClass("className"); // Last of it's type
    $("ul li:nth-child(5)").addClass("className"); // 5th li in a list
    $("ul li:nth-child(3n)").addClass("className"); // Every 3rd li in a list
    
    $("ul li:first").addClass("className"); // First li in a list
    $("ul li:last").addClass("className"); // First li in a list
    $("ul li:even").addClass("className");
    $("ul li:odd").addClass("className");
    
});
```