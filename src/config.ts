export const config = {
    developer: {
        name: "Safat",
        fullName: "Safat Uddin",
        title: "Data Engineer & Analytics Engineer",
        description: "CSE student who builds production-style data platforms and AI products: Databricks lakehouses, SQL warehouses and Gemini-powered agents."
    },
    social: {
        github: "SafatUddin",
        email: "akmsafat@gmail.com",
        location: "Dhaka, Bangladesh"
    },
    about: {
        title: "About Me",
        description: "I am a CSE graduate from North South University. I design and build end-to-end data platforms, including Databricks pipelines using Medallion architecture, Delta Lake and incremental CDC loads, along with analytics models. I am also the co-founder of Remlin, an AI sales agent startup for F-commerce businesses that unifies Messenger, Instagram, WhatsApp and website chat, replies to customers in 2-4 seconds and turns conversations into orders."
    },
    experiences: [
        {
            position: "B.Sc. in Computer Science & Engineering",
            company: "North South University",
            period: "GRAD",
            location: "Dhaka, Bangladesh",
            description: "Graduated in December 2026 with a B.Sc. in CSE from North South University, with a focus on Data Engineering, Analytics Engineering and AI Engineering.",
            responsibilities: [],
            technologies: ["Python", "SQL", "Java", "C", "Machine Learning"]
        },
        {
            position: "Metadata-Driven Banking Lakehouse",
            company: "Databricks, PySpark, Delta Lake",
            period: "DATA",
            location: "",
            description: "Metadata-driven Medallion lakehouse over 6 sources with watermark-based incremental loads, where onboarding a new table takes a config row instead of new code.",
            responsibilities: [],
            technologies: ["Databricks", "PySpark", "Delta Lake", "Unity Catalog"]
        },
        {
            position: "FMCG & Ride-Hailing Pipelines",
            company: "Lakeflow, Auto Loader, AWS S3",
            period: "ETL",
            location: "",
            description: "Consolidated 182 daily S3 files into a star schema and built an exactly-once CDC pipeline for 366,143 trips, with Genie spaces for natural-language analytics.",
            responsibilities: [],
            technologies: ["Lakeflow", "Auto CDC", "Delta MERGE", "Genie"]
        },
        {
            position: "Sales SQL Data Warehouse",
            company: "MySQL, Star Schema",
            period: "SQL",
            location: "",
            description: "Bronze/Silver/Gold warehouse with 25+ ETL scripts for 60,398 transactions, reconciled at every layer, plus 12 analytics scripts using window functions and RFM segmentation.",
            responsibilities: [],
            technologies: ["MySQL", "Window Functions", "CTEs", "RFM"]
        },
        {
            position: "Remlin: AI Sales Agent",
            company: "Gemini API, Node.js, PostgreSQL",
            period: "AI",
            location: "",
            description: "Deployed a channel-agnostic reply engine for Messenger, Instagram, WhatsApp and website chat that also turns free-text chats into orders.",
            responsibilities: [],
            technologies: ["Gemini API", "Node.js", "Prisma", "React", "TypeScript"]
        },
        {
            position: "ProjectFlow",
            company: "React 19, TypeScript, MongoDB",
            period: "WEB",
            location: "",
            description: "Deployed Kanban platform with role-based access, 24 REST endpoints, JWT and Google OAuth, scoring 98 on Lighthouse.",
            responsibilities: [],
            technologies: ["React", "Node.js", "Express", "MongoDB"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Banking Lakehouse",
            category: "Data Engineering",
            technologies: "Databricks, PySpark, Delta Lake, Unity Catalog, Auto Loader, Azure SQL",
            image: `${import.meta.env.BASE_URL}images/banking-lakehouse.png`,
            description: "Metadata-driven Medallion lakehouse ingesting 6 sources with FULL/APPEND/MERGE loads, nested Workflows, an audit table and 5 Gold tables with a 4-page AI/BI dashboard.",
            link: "https://github.com/SafatUddin/Metadata_Driven_Banking_Lakehouse"
        },
        {
            id: 2,
            title: "FMCG Retail Lakehouse",
            category: "Data Engineering",
            technologies: "Databricks, PySpark, Delta Lake, AWS S3, Genie",
            image: `${import.meta.env.BASE_URL}images/fmcg-lakehouse.png`,
            description: "Merged an acquired company's raw S3 data (182 files, about 61.8K order lines) into a star schema, fixing 16 data-quality issues, with a dashboard over Rs 105.34B revenue.",
            link: "https://github.com/SafatUddin/FMCG_Retail_Data_Consolidation_Lakehouse"
        },
        {
            id: 3,
            title: "Ride-Hailing ETL",
            category: "Data Engineering",
            technologies: "Lakeflow Pipelines, Auto Loader, Auto CDC, Delta Lake, AWS S3",
            image: `${import.meta.env.BASE_URL}images/ride-hailing-etl.png`,
            description: "Incremental pipeline processing 366,143 trips across 10 cities with exactly-once ingestion, Lakeflow expectations, a star schema and a Genie space.",
            link: "https://github.com/SafatUddin/Ride_Hailing_Lakeflow_ETL_And_Analytics"
        },
        {
            id: 4,
            title: "Sales Data Warehouse",
            category: "SQL / Analytics",
            technologies: "MySQL, SQL, Star Schema, Medallion Architecture",
            image: `${import.meta.env.BASE_URL}images/sales-warehouse.png`,
            description: "Bronze/Silver/Gold warehouse with 25+ ETL scripts for 60,398 transactions. RFM segmentation shows 4,554 customers (24.64%) At Risk or Lost.",
            link: "https://github.com/SafatUddin/Sales_SQL_DataWarehouse_and_EDA"
        },
        {
            id: 5,
            title: "Remlin",
            category: "AI Agent",
            technologies: "Gemini API, Node.js, PostgreSQL, Prisma, React, TypeScript",
            image: `${import.meta.env.BASE_URL}images/remlin.png`,
            description: "AI sales agent for F-commerce that unifies Messenger, Instagram, WhatsApp and website chat, replies in 2-4 seconds and creates orders from free-text messages.",
            link: "https://remlin.up.railway.app"
        },
        {
            id: 6,
            title: "ProjectFlow",
            category: "Full-Stack",
            technologies: "React 19, TypeScript, Node.js, Express, MongoDB",
            image: `${import.meta.env.BASE_URL}images/projectflow.png`,
            description: "Kanban project manager with multi-workspace collaboration, role-based access, JWT + Google OAuth and Arcjet rate limiting. Lighthouse score 98.",
            link: "https://project-flow-task-manager.vercel.app"
        }
    ],
    contact: {
        email: "akmsafat@gmail.com",
        github: "https://github.com/SafatUddin",
        linkedin: "https://www.linkedin.com/in/safat-uddin-547a68423",
        resume: "https://drive.google.com/file/d/1AjKsH9jU86_uPv-m7tEMoImPw89zVaiq/view"
    },
    skills: {
        develop: {
            title: "DATA ENGINEER",
            description: "Lakehouses, pipelines & warehouses",
            details: "Building Medallion pipelines on Databricks with PySpark, Delta Lake and Unity Catalog, incremental CDC/SCD loads, dimensional models and data-quality checks, then serving them through SQL, AI/BI and Genie.",
            tools: ["Databricks", "PySpark", "Spark SQL", "Delta Lake", "Unity Catalog", "Lakeflow", "Auto Loader", "AWS S3", "Azure SQL", "Power BI", "Tableau", "SQL"]
        },
        design: {
            title: "SOFTWARE & AI",
            description: "Full-stack apps & AI agents",
            details: "Shipping full-stack TypeScript/Node.js products and Gemini-powered agents, with REST APIs, JWT/OAuth auth, MongoDB and PostgreSQL, deployed on Railway and Vercel.",
            tools: ["Python", "TypeScript", "Node.js", "React", "Express", "Django", "MongoDB", "PostgreSQL", "Prisma", "Gemini API", "scikit-learn", "TensorFlow", "Git"]
        }
    }
};
