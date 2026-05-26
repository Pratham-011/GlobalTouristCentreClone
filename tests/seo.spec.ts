import { test, expect } from '@playwright/test'
import { XMLParser } from 'fast-xml-parser'

async function getUrls() {
  const response = await fetch('http://localhost:3001/sitemap.xml')
  const xml = await response.text()

  const parser = new XMLParser()
  const json = parser.parse(xml)

  return json.urlset.url.map((u: any) => u.loc)
}

test.describe('SEO Checks', () => {
  let urls: string[] = []

  test.beforeAll(async () => {
    urls = await getUrls()
  })

  test('all sitemap pages should pass SEO checks', async ({ page }) => {
    for (const url of urls) {
      const response = await page.goto(url)

      expect(response?.status()).toBeLessThan(400)

      const title = await page.title()
      expect(title.length).toBeGreaterThan(10)

      const canonical = await page
        .locator('link[rel="canonical"]')
        .getAttribute('href')

      expect(canonical).toBeTruthy()

      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content')

      expect(description?.length).toBeGreaterThan(20)

      console.log(`Checked: ${url}`)
    }
  })
})