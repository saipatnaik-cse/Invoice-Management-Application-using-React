package HRC30360W;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Insert {
	
	public static int insertdata(HRC30360W_POJO model) {
		// TODO Auto-generated method stub
		String INSERT_USERS_SQL = "INSERT INTO winter_internship" +
	            "  (business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id) VALUES " +
	            " (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

	        int result = 0;

	        try {
				Class.forName("com.mysql.cj.jdbc.Driver");
			} catch (ClassNotFoundException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}

	        try (
	        	Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose", "root", "root");

	            PreparedStatement preparedStatement = connection.prepareStatement(INSERT_USERS_SQL)) {
	            preparedStatement.setString(1, model.getBusiness_code());
	            preparedStatement.setInt(2, model.getCust_number());
	            preparedStatement.setString(3, model.getClear_date());
	            preparedStatement.setInt(4, model.getBuisness_year());
	            preparedStatement.setString(5, model.getDoc_id());
	            preparedStatement.setString(6, model.getPosting_date());
	            preparedStatement.setString(7, model.getDocument_create_date());
	            preparedStatement.setString(8, model.getDue_in_date());
	            preparedStatement.setString(9, model.getInvoice_currency());
	            preparedStatement.setString(10, model.getDocument_type());
	            preparedStatement.setInt(11, model.getPosting_id());
	            preparedStatement.setDouble(12, model.getTotal_open_amount());
	            preparedStatement.setString(13, model.getBaseline_create_date());
	            preparedStatement.setString(14, model.getCust_payment_terms());
	            preparedStatement.setInt(15, model.getInvoice_id());
	            System.out.println(preparedStatement);
	            preparedStatement.executeUpdate();
	            connection.close();

//	            result = preparedStatement.executeUpdate();

	        } catch (SQLException e) {
	            // process sql exception
	            e.printStackTrace();
	        }
	        return result;	
	}

}
