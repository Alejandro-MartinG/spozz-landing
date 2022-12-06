//import { env } from '$env/dynamic/private'
import { saveRowsInCSV } from '$lib/db/csv-handler.js'
import { redirect } from '@sveltejs/kit';

const redirectTo = './thank-you-2';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // Set up database and connect
}
 
/** @type {import('./$types').Actions} */
export const actions = {
  register: async ({ request }) => {
    const data = await request.formData();

    const formType = 'Investor'

    const date = new Date();
    const name = data.get('name');
    const firstName = data.get('first-name');
    const lastName = data.get('last-name');
    const role = data.get('role');
    const email = data.get('email');
    const phone = data.get('phone');
    const country = data.get('country');
    const spotify = data.get('spotify');
    const facebook = data.get('facebook');
    const youtube = data.get('youtube');
    const otherStreamingPlatform = data.get('otherStreamingPlatform');
    const instagram = data.get('instagram');
    const otherSocialMedia = data.get('otherSocialMedia');
    const twitter = data.get('twitter');
    const website = data.get('website');
    const comments = data.get('comments');
    const sendmail = data.get('sendmail');
 

    const user = {
      formType,
			name,
			firstName,
			lastName,
			role,
			email,
			phone,
			country,
			spotify,
      facebook,
			youtube,
      otherStreamingPlatform,
			instagram,
      otherSocialMedia,
			twitter,
			website,
			comments,
      sendmail,
      date: date.getDate()
		};
    console.log('USER:  ', user);
    console.log('XXXXXXXXXXXXXXXXXX');

    await saveRowsInCSV(user)
 
    if (redirectTo) {
			throw redirect(303, redirectTo);
		}

    return {
      success: true,
    };
  },
};