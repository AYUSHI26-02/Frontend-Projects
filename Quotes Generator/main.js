const api_url = "https://api.api-ninjas.com/v2/randomquotes";
const api_key = "GDzZpc2XFj+NFDxpRoyooQ==LhNd6ltJ0VpH30Gi";

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function getQuote() {
    try {
        const response = await fetch(api_url, {
            method: "GET",
            headers: {
                "X-Api-Key": api_key
            }
        });

        const data = await response.json();

        // Response is an ARRAY
        quoteEl.innerHTML = `"${data[0].quote}"`;
        authorEl.innerHTML = `${data[0].author}`;

    } catch (error) {
        quoteEl.innerHTML = "Failed to load quote.";
        authorEl.innerHTML = "";
        console.error(error);
    }
}

// Load first quote
getQuote();

function tweet() {
    const text = `${quoteEl.innerText} ${authorEl.innerText}`;
    window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
        "Tweet Window",
        "width=600,height=300"
    );
}
