class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :image
      t.string :content
      t.references :experienceable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
