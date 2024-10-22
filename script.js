function calculateFLAMES() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    if (!name1 || !name2) {
        alert("Please enter both names!");
        return;
    }

    const result = flamesGame(name1, name2);
    // Store result in localStorage
    localStorage.setItem("flamesResult", result);
    // Redirect to results page
    window.location.href = "result.html";
}

function flamesGame(name1, name2) {
    const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    
    // Clean up names
    const cleanedName1 = name1.replace(/\s+/g, '').toLowerCase();
    const cleanedName2 = name2.replace(/\s+/g, '').toLowerCase();
    
    // Count characters
    const combined = (cleanedName1 + cleanedName2).split('');
    const count = {};
    
    combined.forEach(char => {
        count[char] = (count[char] || 0) + 1;
    });

    // FLAMES calculation
    let totalCount = (cleanedName1.length + cleanedName2.length) - 2 * Object.keys(count).length;

    let index = 0;
    while (flames.length > 1) {
        index = (index + totalCount - 1) % flames.length;
        flames.splice(index, 1);
    }
    
    switch (flames[0]) {
        case 'F': return "Friends";
        case 'L': return "Lovers";
        case 'A': return "Affectionate";
        case 'M': return "Marriage";
        case 'E': return "Enemies";
        case 'S': return "Siblings";
    }
}
