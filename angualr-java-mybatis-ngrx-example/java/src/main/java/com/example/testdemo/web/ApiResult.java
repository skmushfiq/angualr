package com.example.testdemo.web;

public class ApiResult<T> {
	private T result;
	private boolean success;
	private String message;
	private Exception exception;
	public T getResult() {
		return result;
	}
	public void setResult(T result) {
		this.result = result;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Exception getException() {
		return exception;
	}
	public void setException(Exception exception) {
		this.exception = exception;
	}

	
}
