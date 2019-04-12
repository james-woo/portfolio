class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.string :image

      t.timestamps
    end
  end
end
