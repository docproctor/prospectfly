/**
 * Triggers a Vercel deployment via webhook
 * Configure VITE_VERCEL_DEPLOY_HOOK in your .env file
 */
export async function triggerDeploy() {
  const hookUrl = import.meta.env.VITE_VERCEL_DEPLOY_HOOK

  if (!hookUrl) {
    console.warn('No Vercel deploy hook configured (VITE_VERCEL_DEPLOY_HOOK)')
    return { success: false, error: 'No deploy hook configured' }
  }

  try {
    const response = await fetch(hookUrl, { method: 'POST' })

    if (!response.ok) {
      throw new Error(`Deploy hook failed: ${response.status}`)
    }

    console.log('Vercel deploy triggered successfully')
    return { success: true }
  } catch (err) {
    console.error('Deploy hook error:', err)
    return { success: false, error: err.message }
  }
}
