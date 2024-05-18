/*
let gold = ["gold","/images/colors/gold.png", "drop-shadow(rgb(255, 215, 0) 0px 0px 10px)"];
let red = ["red","/images/colors/red.png", "drop-shadow(rgba(228, 56, 56, 0.9) 0px 0px 10px)"];
let pink = ["pink","/images/colors/pink.png","drop-shadow(rgba(211, 46, 230, 0.8) 0px 0px 10px)"];
let purple = ["purple","/images/colors/purple.png","drop-shadow(rgba(136, 71, 255, 0.7) 0px 0px 10px)"];
let blue = ["blue","/images/colors/blue.png","drop-shadow(rgba(75, 105, 255, 0.6) 0px 0px 10px)"];
let grey = ["grey","/images/colors/grey.png","drop-shadow(rgba(176, 195, 217, 0.4) 0px 0px 10px)"];
*/

let gold = ["./images/colors/gold.png", "drop-shadow(rgb(255, 215, 0) 0px 0px 10px)","gold"];
let red = ["./images/colors/red.png", "drop-shadow(rgba(228, 56, 56, 0.9) 0px 0px 10px)","red"];
let pink = ["./images/colors/pink.png","drop-shadow(rgba(211, 46, 230, 0.8) 0px 0px 10px)","pink"];
let purple = ["./images/colors/purple.png","drop-shadow(rgba(136, 71, 255, 0.7) 0px 0px 10px)","purple"];
let blue = ["./images/colors/blue.png","drop-shadow(rgba(75, 105, 255, 0.6) 0px 0px 10px)","blue"];
let grey = ["./images/colors/grey.png","drop-shadow(rgba(176, 195, 217, 0.4) 0px 0px 10px)","grey"];










let CasesData = [["Deep Sea Case", 29.63,"./images/Budget.png","Case.html",0,[["Frostbite", 95.33, 10, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5mLBfDY0jhyo8DEiv5dbMa4-qL0xR_C29ThoN1I/360fx360f", pink],["Press Vest", 67.59, 10,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe7WPGfCk4nReh8DEiv5dRP6k6r7YwQfANQQVrlw", pink],["Shard of True Ice", 51.82, 10,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe4WLMfCk4nReh8DEiv5dbO6o7rrMwQPy59FTZYoM", purple],["Rustigé Egg", 41.93, 10,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WTAfCk4nReh8DEiv5daPKs-qrw1Q_i233e6VbI", purple],["The Blue Death", 6.16, 20,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GrFfCk4nReh8DEiv5dYOq47qLIyRPG4__fadYA", grey],["Blue Jacket", 0.11, 20,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GPEfCk4nReh8DEiv5dbP604qrQwRfu3lOsew3w", grey],["Blue Hoodie", 0.10, 20,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Ja5WXNfCk4nReh8DEiv5daOak7pLQyR_C4ytcrC4I", grey]]],
["3% Relic", 66.92,"images/3Relic.png","Case.html",1,[["Alien Relic SMG", 1012.21,3,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe4GPGfCk4nReh8DEiv5daMaE5pbwyQPu_6NY5PLI",gold],["Press Vest", 67.59, 45, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe7WPGfCk4nReh8DEiv5dRP6k6r7YwQfANQQVrlw", purple],["Blue Beenie Hat", 0.11, 25, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GPNfCk4nReh8DEiv5daPqk5pbY-SPG3Zs6z0IM", grey],["Blue Cap", 0.11, 27, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GDMfCk4nReh8DEiv5daPqo3pbU3Q_-_C04jh-k", grey]]],
["Money Printer", 640.72,"images/MoneyPrinter.png","Case.html",2,[["Metal Tree Door", 4267.12,4,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835FX52LCfCk4nReh8DEiv5ddPKo9pbM1RP2US9wYKg",red],["Punishment Mask", 1811.14,6,"https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GbBfCk4nReh8DEiv5ddOKk2r7E2RPC3c_o2Rfo",pink],["Alien Relic SMG", 1377.79,11,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe4GPGfCk4nReh8DEiv5daMaE5pbwyQPu_6NY5PLI",pink],["Big Grin", 682.94, 11, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfCk4nReh8DEiv5daPq0_qrw_QfG9O-tu0Dw", purple],["Glory Ak47", 379.17,13,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fc5GLGfCk4nReh8DEiv5daMag5qLU2QPi5xVewp5A",blue],["Glory SAR",78.22,18,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fd52LEfCk4nReh8DEiv5dbPa44pbAyQfgqQ4oEgQ",grey],["AK-47 From Hell", 38.31, 18, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835FY5GPEfCk4nReh8DEiv5dfMKs_pLE1QfBIOUginQ",grey],["Gold Rock", 32.49, 19,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5WLMfCk4nReh8DEiv5daO6o2r7MxR_69q4Sc-ZY",grey]]],
["Guaranteed Dream", 171.20,"images/GuaranteedDream.png","Case.html",3,[["Big Grin", 682.94, 5, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfCk4nReh8DEiv5daPq0_qrw_QfG9O-tu0Dw", pink],["Fire jacket", 316.79, 15,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe42LEfCk4nReh8DEiv5dYP6k7rb02RfGap1rNXA",pink],["Alien Red", 181.10, 40, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Ff5GLNfCk4nReh8DEiv5dbPK47pbcyR_m4DQ68Ofs",purple],["Night Sky Large Box", 7.12, 10, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Bd52LGfCk4nReh8DEiv5dbO6k6pbc-Qfq5tXU16JM",grey],["Night Sky Chair", 3.58, 15, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835BY7GLEfCk4nReh8DEiv5daOK82rLY-Qfu-OYRdyEc",grey],["Night Sky Furnace", 1.87, 15, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Bd7GPEfCk4nReh8DEiv5dYMa02qL0zQf25RHGPT_4",grey]]],
["Tempered AK Flip", 17.17,"images/TemperedAKFlip.png","Case.html",4,[["Tempered AK47", 31.11, 50, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WHNfCk4nReh8DEiv5dYO607rLc2Rv2_0wEIAYs", purple],["Tan Boots", 0.11, 50, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GDHfCk4nReh8DEiv5daPqg8q7w0RfC95vL6HF0", grey]]],
["Press Vest Flip", 37.23,"images/PressVestFlip.png","Case.html",5,[["Press Vest", 67.59, 50, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe7WPGfCk4nReh8DEiv5dRP6k6r7YwQfANQQVrlw", purple],["Blue Cap", 0.11, 25, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GDMfCk4nReh8DEiv5daPqo3pbU3Q_-_C04jh-k", grey], ["Blue Beenie Hat", 0.11, 25, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GPNfCk4nReh8DEiv5daPqk5pbY-SPG3Zs6z0IM", grey]]],
["Big Grin Flip", 375.68,"images/BigGrinFlip.png","Case.html",6,[["Big Grin", 682.94, 50, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfCk4nReh8DEiv5daPq0_qrw_QfG9O-tu0Dw", purple],["Cloth", 0.11, 50, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GHEfCk4nReh8DEiv5dYMKA5pLYzRv6605EYJLk", grey]]],
["Ice Case", 24.76,"images/IceCase.png","Case.html",7,[["Alien Relic SMG", 1012.21,0.10,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe4GPGfCk4nReh8DEiv5daMaE5pbwyQPu_6NY5PLI",gold],["Frostbite", 95.33, 0.90, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5mLBfDY0jhyo8DEiv5dbMa4-qL0xR_C29ThoN1I/360fx360f", pink],["Shard of True Ice", 51.82, 9,"https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe4WLMfCk4nReh8DEiv5dbO6o7rrMwQPy59FTZYoM", pink],["Cold Hunter MP5", 35.04, 20, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Bf7GLGfCk4nReh8DEiv5daPqk3q701Qvi6rAAcblA", purple],["Cold Hunter AK", 32.88, 20, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Be5mLCfCk4nReh8DEiv5dYMa07rbc-Rvm5Lhnqc2A", purple],["Cold Hunter Crossbow", 6.46, 15, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Bd5GLCfCk4nReh8DEiv5dbPK87rbM2Qfi3Wqug1CY", blue],["Cold Hunter Thompson", 5.01, 20, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835dd5GLAfDY0jhyo8DEiv5deMa08qrc_SfHpmKGPhw", grey],["Glacial Visage Metal Door", 2.89, 15, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835df42LFfDY0jhyo8DEiv5ddOKE2rLAzRPC7rS812Lk", grey]]],
["10% Grin", 75.22,"images/10Grin.png","Case.html",8,[["Big Grin", 682.94, 10, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GLEfCk4nReh8DEiv5daPq0_qrw_QfG9O-tu0Dw", red],["Cloth", 0.11, 30, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GHEfCk4nReh8DEiv5dYMKA5pLYzRv6605EYJLk", grey],["Red Cap", 0.11, 30, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GDNfCk4nReh8DEiv5dQPqE-pL0zQA66jkOM", grey],["Black", 0.09, 30, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WPGfCk4nReh8DEiv5dbMa44rbMxRv2_sz_DlVc", grey]]],
["Angry Scientist Case", 5.92,"images/AngryScientistCase.png","Case.html",9,[["Surgeon Scrubs", 18.67, 10, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5WTNfCk4nReh8DEiv5dYP604qLcxRfC7FbgYlS8", pink],["Meat Mask", 12.01, 10, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Ff5GPCfCk4nReh8DEiv5daMa02rrI-RP67XmDGdfM", pink],["Laboratory Armored Door", 11.09, 20, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GbGfCk4nReh8DEiv5dYOqw8rrYwSfu4_2_hk5k", pink],["Rescue Cap", 0.21, 30, "https://community.cloudflare.steamstatic.com/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GbAfCk4nReh8DEiv5dROag6pLw1SPnr505JuQ",grey],["Grey Longsleeve T-Shirt", 0.12, 30, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GLAfCk4nReh8DEiv5dYMa83qbM-Qv63n_WMSyU",grey]]],
["Arctic Ops Case", 11.31,"images/ArcticOpsCase.png","Case.html",10,[["Stainless Facemask", 59.85, 5, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe4WPBfCk4nReh8DEiv5dYMKs4qbA0Q_25VDf9Y2M", red],["Digital Camo MP5", 44.08, 10, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Fe5GPEfCk4nReh8DEiv5dYPK04rLY_Qfi-wUTqOxk",pink],["Urban Ice Jacket", 25.09, 10, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835FY42LNfCk4nReh8DEiv5dbO6g2qbwxRv0-Lr7AHQ", pink],["Snow Camo Jacket", 1.01, 25, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GLNfCk4nReh8DEiv5dYOas-q7EzQ_u2d97Lo0M", grey],["Snow Camo Bandana", 0.28, 25, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GTHfCk4nReh8DEiv5daPK03qrA0Q_64iUe-2eI",grey],["Snow Camo Pants", 0.21, 25, "https://steamcommunity-a.akamaihd.net/economy/image/6TMcQ7eX6E0EZl2byXi7vaVKyDk_zQLX05x6eLCFM9neAckxGDf7qU2e2gu64OnAeQ7835Je5GDEfCk4nReh8DEiv5daPaA9rLc0Q_C_vCAlyHc", grey]]]];









let Animations = [["51", "-86.38%", "-85.73%"],["54", "-90.3%", "-90.7%"],["52", "-87.65%", "-87.4%"],["44", "-73.86%", "-74.15%"]]

let Pointers = [["m11.998 17 7-8h-14z", "M5 15h14l-7-8z"], ["m9 19 8-7-8-7z", "M15 19V5l-8 7z"]];