require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application

    I18n.config.available_locales = :ja
    I18n.default_locale = :ja
    #require 'faker'
    #Faker::Config.locale = :en
    #Faker::Internet.email

    config.time_zone = 'Tokyo'

    config.generators do |g|
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.test_framework false
      # config.i18n.default_locale = :ja
    end
  end
end
