CarrierWave.configure do |config|
  config.fog_provider = 'fog'
  config.fog_credentials = {
    provider: "AWS",
    aws_access_key_id: "AKIAIPAFVSZBE3PSSY6Q",
    aws_secret_access_key: "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"
  }

  if Rails.env.production?
    config.fog_directory  = ENV["project-bikeshed-production"]
  else
    config.fog_directory  = ENV["project-bikeshed-development"]
  end
end
