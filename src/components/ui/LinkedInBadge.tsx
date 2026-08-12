"use client";

import { useEffect } from "react";

export default function LinkedInBadge() {
    useEffect(() => {
        // Load the LinkedIn badge script dynamically after mount
        const existingScript = document.querySelector(
            'script[src="https://platform.linkedin.com/badges/js/profile.js"]'
        );

        if (!existingScript) {
            const script = document.createElement("script");
            script.src = "https://platform.linkedin.com/badges/js/profile.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        } else {
            // If script already loaded, trigger badge re-render
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((window as any).LI) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).LI.init();
            }
        }
    }, []);

    return (
        /* Constrain width so the badge iframe never stretches the page on mobile */
        <div
            className="overflow-hidden max-w-full"
            style={{ maxWidth: "340px", width: "100%" }}
        >
            <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="shashikathi"
                data-version="v1"
            >
                <a
                    className="badge-base__link LI-simple-link"
                    href="https://in.linkedin.com/in/shashikathi?trk=profile-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Shashi Kathi
                </a>
            </div>
        </div>
    );
}
