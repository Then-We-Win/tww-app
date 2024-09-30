# Intellecto App

## Current issues:

General auth issues...
- [x] remove Pinia
- [ ] logging out creates error (may be resolved by removing Pinia)
        POST http://localhost:8088/auth/logout 400 (Bad Request)
- [ ] .env is setting the USER and PASSWORD fields directly; need to move this to state management.
- [ ] project names and contents are no longer synced since addition of Pinia; no errors though. Settings "update" button still pushes changes.

Wizard issues...
- [ ] pages are organized poorly - routes connected to auth so refactoring is dependent on Pinia removal
- [ ] completion of wizard creates inappropriate toast + does not redirect
- [ ] completion of wizard does not change user "onboarded" setting to true, so the wizard is looped forever - updating settings dependent on Pinia removal
- [ ] wizard steps are their own table in the database; need to move these to settings.settings and settings.strings
    - [ ] settings.settings content:
        ``` json
        "brands": {
            "form": {
                "basics": [
                    {
                        "name": "brandName",
                        "type": "text"
                    },
                    {
                        "name": "mission",
                        "type": "textarea"
                    },
                    {
                        "name": "coreValues",
                        "type": "textarea"
                    },
                    {
                        "name": "vision",
                        "type": "textarea"
                    },
                    {
                        "name": "history",
                        "type": "textarea"
                    }
                ],
                "positioning": [
                    {
                        "name": "personality",
                        "type": "textarea"
                    },
                    {
                        "name": "relativePostion",
                        "type": "textarea"
                    },
                    {
                        "name": "usp",
                        "type": "textarea"
                    },
                    {
                        "name": "primaryOffering",
                        "type": "textarea"
                    }
                ],
                "customers": [
                    {
                        "name": "demographics",
                        "type": "textarea"
                    },
                    {
                        "name": "psychographics",
                        "type": "textarea"
                    },
                    {
                        "name": "needsChallenges",
                        "type": "textarea"
                    }
                ],
                "competitiveAnalysis": [
                    {
                        "name": "competitors",
                        "type": "textarea"
                    },
                    {
                        "name": "differentiators",
                        "type": "textarea"
                    },
                    {
                        "name": "trends",
                        "type": "textarea"
                    }
                ],
                "creativeStrategy": [
                    {
                        "name": "tone",
                        "type": "textarea"
                    },
                    {
                        "name": "readingLevel",
                        "type": "textarea"
                    },
                    {
                        "name": "exclusions",
                        "type": "textarea"
                    },
                    {
                        "name": "grammar",
                        "type": "textarea"
                    }
                ],
                "legal": [
                    {
                        "name": "socioPolitical",
                        "type": "textarea"
                    },
                    {
                        "name": "industryStandards",
                        "type": "textarea"
                    }
                ],
                "preferences": [
                    {
                        "name": "approval",
                        "type": "textarea"
                    },
                    {
                        "name": "formats",
                        "type": "textarea"
                    },
                    {
                        "name": "structures",
                        "type": "textarea"
                    }
                ],
                "additional": [
                    {
                        "name": "additional",
                        "type": "textarea"
                    }
                ],
            }
        }
        ```
    - [ ] settings.strings content:
        ```json
        "brands": {
            "form": {
                "basics": {
                    "title": "Company Information",
                    "description": "",
                    "form": {                   
                        "brandName": "What is the official name of your company or brand?",
                        "mission": "What is your company's mission statement?",
                        "coreValues": "List the core values that define your business operations and culture.",
                        "vision": "Describe your company’s vision for the next 5-10 years.",
                        "history": "Provide a brief history of your company."
                    }
                },
                "positioning": {
                    "title": "Brand and Product Positioning",
                    "description": "",
                    "form": {
                        "personality": "How would you describe your brand's personality? Please select from: professional, innovative, youthful, luxurious, cost-effective, eco-friendly, traditional, other.",
                        "relativePosition": "What is your brand’s primary position in the market relative to your competitors?",
                        "usp": "Describe the unique selling proposition (USP) of your company as a whole.",
                        "primaryOffering": "Is your primary offering a product or a service? Please describe briefly and define its position in the market."
                    }
                },
                "customers": {
                    "title": "Customer Research",
                    "description": "",
                    "form": {
                        "demographics": "Describe the primary demographic characteristics of your target audience (e.g., age, gender, location, income level).",
                        "psychographics": "What are the psychographic characteristics of your target audience (e.g., interests, values, lifestyle)?",
                        "needsChallenges": "What are the main needs and challenges of your target audience?"
                    }
                },
                "competitiveAnalysis": {
                    "title": "Competitive Analysis",
                    "description": "",
                    "form": {
                        "competitors": "Who is your main competitor? Please list their name and website.",
                        "differentiators": "What features or benefits of your offerings set you apart from your competitors?",
                        "trends": "Are there any industry trends or external factors influencing your content strategy?"
                    }
                },
                "creativeStrategy": {
                    "title": "Content Strategy and Creative Briefs",
                    "description": "",
                    "form": {
                        "tone": "What tone of voice should be used in your written content? Select all that apply: formal, informal, professional, conversational, authoritative, enthusiastic, technical, whimsical, other.",
                        "readingLevel": "What is the desired reading level for your content? (Choose one: elementary, secondary, university, professional.)",
                        "exclusions": "What types of messages or copy should be excluded from your content?",
                        "grammar": "Are there any specific grammar or style rules that should be adhered to in our writing?"
                    }
                },
                "legal": {
                    "title": "Public Stances and Legal Considerations",
                    "description": "",
                    "form": {
                        "socioPolitical": "Are there any public stances on social or political issues that your company has taken that should be reflected in the content?",
                        "industryStandards": "Are there any legal or compliance considerations specific to your industry that need to be reflected in the content?"
                    }
                },
                "preferences": {
                    "title": "Content Preferences and Restrictions",
                    "description": "",
                    "form": {
                        "approval": "What is the approval process for content before it goes live?",
                        "formats": "What specific content formats do you prefer? (e.g., blog posts, articles, case studies, white papers)",
                        "structures": "Are there specific content styles or structural preferences (e.g., short-form vs. long-form articles, use of bullet points, inclusion of calls to action)?"
                    }
                },
                "additional": {
                    "title": "Additional Information",
                    "description": "",
                    "form": {
                        "additional": "Is there any other information you think is crucial for us to know in order to effectively meet your content creation needs?"
                    }
                }
            }
        }
        ```
