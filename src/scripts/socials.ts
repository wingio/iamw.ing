export const Socials = [
    {
        username: "wingio",
        service: "GitHub",
        baseUrl: "https://github.com/"
    },
    {
        username: "iamw.ing",
        service: "Bluesky",
        baseUrl: "https://bsky.app/profile/"
    },
    {
        username: "wing",
        service: "Mastodon",
        baseUrl: "https://androiddev.social/@"
    }
] as Array<SocialAccount>;

export const SocialsMap = {
    gh: Socials[0],
    github: Socials[0],
    bsky: Socials[1],
    bluesky: Socials[1],
    masto: Socials[2],
    mastodon: Socials[2]
};
