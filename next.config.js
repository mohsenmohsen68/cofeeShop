/** @type {import('next').NextConfig} */
const nextConfig = {
    "presets": [
        [
          "next/babel",
          {
            "preset-react": { "throwIfNamespace": false },
          }
        ]
      ],
}

module.exports = nextConfig
