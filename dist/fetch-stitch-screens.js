import { stitch } from "@google/stitch-sdk";
async function fetchScreens() {
    const projectId = "12538119097391499479";
    try {
        console.log(`Fetching project: ${projectId}`);
        const project = stitch.project(projectId);
        // List all screens
        console.log("Listing screens...");
        const screens = await project.screens();
        console.log(`Found ${screens.length} screens:`);
        screens.forEach(screen => {
            console.log(`  - ${screen.name} (${screen.id})`);
        });
        // Target screen IDs from the user
        const targetScreenIds = [
            "9e88ba6fc54740c8bf4ddc44e10277fb", // Addis Hunt PRD
            "asset-stub-assets_96ce74a43f9d410cb0ff2c587c424bcf", // Design System
            "asset-stub-assets_5b1eedf71d68468596d9a8eb174cb6e6", // Design System
            "3bdc995bec7247f3bf4c8a2c8631726f", // Homepage - Addis Hunt (Restyled)
            "3a6c6a4e90e242f7a1267facb4cac0b1", // Product Detail - Addis Hunt (Restyled)
            "6a12716300eb4358ba847ea5490dbd5c", // Submit a Startup - Addis Hunt (Restyled)
            "50521c7083ff4077ae3efe2f1bbb4fc1", // Maker Profile - Addis Hunt (Restyled)
        ];
        // Create output directory
        const fs = await import("fs");
        const path = await import("path");
        const outputDir = path.join(process.cwd(), "stitch-output");
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        // Fetch each target screen
        for (const screenId of targetScreenIds) {
            try {
                console.log(`\nFetching screen: ${screenId}`);
                const screen = await project.getScreen(screenId);
                console.log(`  Name: ${screen.name}`);
                // Get HTML download URL
                console.log("  Getting HTML download URL...");
                const htmlUrl = await screen.getHtml();
                console.log(`  HTML URL: ${htmlUrl}`);
                // Get image download URL
                console.log("  Getting image download URL...");
                const imageUrl = await screen.getImage();
                console.log(`  Image URL: ${imageUrl}`);
                // Download HTML
                if (htmlUrl) {
                    console.log("  Downloading HTML...");
                    const htmlResponse = await fetch(htmlUrl);
                    if (htmlResponse.ok) {
                        const htmlContent = await htmlResponse.text();
                        const htmlFileName = `${screen.name.replace(/[^a-zA-Z0-9]/g, '_')}.html`;
                        const htmlPath = path.join(outputDir, htmlFileName);
                        fs.writeFileSync(htmlPath, htmlContent);
                        console.log(`  Saved HTML to: ${htmlPath}`);
                    }
                    else {
                        console.log(`  Failed to download HTML: ${htmlResponse.status}`);
                    }
                }
                // Download image
                if (imageUrl) {
                    console.log("  Downloading image...");
                    const imageResponse = await fetch(imageUrl);
                    if (imageResponse.ok) {
                        const imageBuffer = await imageResponse.arrayBuffer();
                        const imageFileName = `${screen.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
                        const imagePath = path.join(outputDir, imageFileName);
                        fs.writeFileSync(imagePath, Buffer.from(imageBuffer));
                        console.log(`  Saved image to: ${imagePath}`);
                    }
                    else {
                        console.log(`  Failed to download image: ${imageResponse.status}`);
                    }
                }
            }
            catch (error) {
                console.error(`  Error fetching screen ${screenId}:`, error);
            }
        }
        console.log("\nDone!");
    }
    catch (error) {
        console.error("Error:", error);
    }
}
fetchScreens();
