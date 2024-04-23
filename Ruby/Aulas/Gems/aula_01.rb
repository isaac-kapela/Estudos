
# Nome da gem usada: OS

require 'os'

def minha_os
  if OS.windows?
    "Windows"
  elsif OS.linux?
    "Linux"
  elsif OS.mac?
    "Mac"
  else
    "Não consegui identificar"
  end
end

puts "Meu computador possui #{OS.cpu_count} cores, é #{OS.bits} bits e o sistema operacional é #{minha_os}"

