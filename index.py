import os
import csv

def create_folder_with_csv(folder_name):
    try:
        os.mkdir(folder_name)
        print(f"Folder '{folder_name}' created successfully.")
        # Create a CSV file inside the folder
        csv_file_path = os.path.join(folder_name, 'data.csv')
        print(os.path.join(folder_name, 'data.csv'))
        with open(csv_file_path, 'w', newline='') as file:
            csv_writer = csv.writer(file)
            csv_writer.writerow(['Name', 'Age'])  # Write header
            csv_writer.writerow(['John Doe', 30])  # Write sample data
            print(f"CSV file 'data.csv' created inside '{folder_name}'.")
    except FileExistsError:
        print(f"Folder '{folder_name}' already exists.")

if __name__ == '_main_':
    folder_name = 'NewFolder1'  # Replace with the desired folder name
    create_folder_with_csv(folder_name)
