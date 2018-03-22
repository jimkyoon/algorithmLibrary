def my_select
  result = []
  for i in 0...self.length
    if yield(self[i])
      # add to the end
      result << self[i]
    end
  end
  result
end

def my_reject
  result = []
  for i in 0...self.length
    result << self[i] unless yeild self[i]
  end
  result
end