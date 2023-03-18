package HRC30360W;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Edit{
	
	public static int editdata(HRC30360W_POJO model)
	{
		String UPDATE_USER_SQL = "update winter_internship set invoice_currency=?, cust_payment_terms=? where sl_no=?;";
		int result = 0;

        try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
        
        try (
	        	Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose", "root", "root");

	            PreparedStatement preparedStatement = connection.prepareStatement(UPDATE_USER_SQL)) {
	            preparedStatement.setString(1, model.getInvoice_currency());
	            preparedStatement.setString(2, model.getCust_payment_terms());
	            preparedStatement.setInt(3, model.getSl_no());
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
