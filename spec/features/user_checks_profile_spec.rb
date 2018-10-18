require 'rails_helper'

feature 'user has an account and checks out their profile' do

  scenario 'user can check profile' do
    visit '/users/sign_up'
    fill_in 'Email', with: "john@example.com"
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    click_button 'Sign up'
    expect(page).to have_content('Welcome! You have signed up successfully.')
    expect(page).to have_content('Sign Out')
    save_and_open_page
    click_link 'Profile'
    expect(page).to have_content("john@example.com")
  end


end
